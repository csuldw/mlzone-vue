<template>
  <div class="container-main">
    <div class="container-title"><span>{{title}}</span></div>
    <section>
      <!--工具条-->
      <el-form :inline="true" :model="filters">
        <el-row >
          <el-col :span="5" align="left" >
            <el-form-item label="优先级">
              <el-select v-model="filters.level" clearable placeholder="请选择"  @change="getBugInfos">
                <el-option v-for="(item, idx) in levelOptions" :key="idx" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="5"  align="left" style="min-width: 15%;padding-bottom: 0px;" >
            <el-form-item label="状态:">
              <el-select v-model="filters.status" clearable placeholder="请选择" @change="getBugInfos">
                <el-option v-for="(item, idx) in statusOptions" :key="idx" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12" class="toolbar" style="width: 25%;padding-bottom: 0px;" >
              <el-form-item label="关键字">
                <el-input v-model="filters.keywords" placeholder="关键字" @keyup.enter.native="getBugInfos"></el-input>
              </el-form-item>
          </el-col>

          <el-col :span="1" align="left" style="width: 6%; margin-left: -100px">
              <el-form-item>
                <el-button type="primary" v-on:click="getBugInfos">查询</el-button>
              </el-form-item>
          </el-col>
          <el-col :span="2" align="left" style="width: 6%;">
              <el-form-item>
                <el-button type="primary" @click="handleAdd">新增</el-button>
              </el-form-item>
          </el-col>
          <el-col :span="1" align="left" style="width: 10%;">
            <el-form-item>
              <el-button class="exportFile" type="primary" @click="exportToExcel">导出Excel</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>

      <!--列表-->
      <el-table :data="bugInfos" highlight-current-row v-loading="listLoading" @selection-change="selsChange" style="width: 100%;">
        <!--<el-table-column type="selection" width="55">  </el-table-column>-->
        <el-table-column type="index" width="50"></el-table-column>
        <el-table-column prop="bugName" label="名称" width="210" sortable show-overflow-tooltip></el-table-column>
        <el-table-column prop="projectName" label="所属项目" width="160" show-overflow-tooltip  sortable></el-table-column>
        <el-table-column prop="moduleName" label="所属模块" width="160"  show-overflow-tooltip sortable></el-table-column>
        <el-table-column prop="level" label="优先级" width="100" sortable>
          <template scope="scope">
            <div v-show='scope.row.level==0' >高</div>
            <div v-show='scope.row.level==1' >中</div>
            <div v-show='scope.row.level==2'>低</div>
          </template>
        </el-table-column>
        <el-table-column prop="createTime" label="创建日期" width="120" sortable></el-table-column>
        <el-table-column prop="closeTime" label="完成日期" width="120" sortable></el-table-column>
        <el-table-column prop="status" label="状态" width="90" sortable :show-overflow-tooltip="true">
          <template scope="scope">
            <div v-show='scope.row.status==1' class='bugStatusOn'  @click='updateBugStatus(scope.$index, scope.row)'>打开</div>
            <div v-show='scope.row.status==0' class='bugStatusOff' @click='updateBugStatus(scope.$index, scope.row)'>关闭</div>
          </template>
        </el-table-column>
        <el-table-column prop="personInCharge" label="责任人" width="150" sortable></el-table-column>
        <el-table-column prop="desc" label="详细描述" width="160" show-overflow-tooltip sortable></el-table-column>
        <el-table-column label="操作" prop="btn" :show-overflow-tooltip="true">
          <template scope="scope" >
            <!--<i class="el-icon-edit" title="编辑" @click="handleEdit(scope.$index, scope.row)" style="cursor:pointer;"></i>-->
            <el-button size="small" @click="handleEdit(scope.$index, scope.row)" >编辑</el-button>
            <!--<i class="el-icon-delete" title="删除" @click="handleDel(scope.$index, scope.row)" style="cursor:pointer;"></i>-->
          </template>
        </el-table-column>
      </el-table>

      <!--工具条-->
      <el-col :span="24" class="toolbar" align="right">
        <!--<el-button type="danger" @click="batchRemove" :disabled="this.sels.length===0">批量删除</el-button>-->
        <el-pagination layout="total, sizes, prev, pager, next"
                       @size-change="handleSizeChange"
                       @current-change="handleCurrentChange"
                       :current-page="filters.pageNum"
                       :page-sizes="[10, 20, 30, 40]"
                       :page-size="filters.pageSize"
                       :total="total">
        </el-pagination>
      </el-col>

      <!--新增界面-->
      <el-dialog title="新增" style="min-width: 1900px !important;" v-model="dataFormVisible" :close-on-click-modal="false">
        <el-form :model="dataForm" labelWidth="150px" :inline="true" ref="dataForm">
          <el-row>
            <el-col :span="12">
                <el-form-item label="名称">
                  <el-input v-model="dataForm.bugName" auto-complete="off"></el-input>
                </el-form-item>
            </el-col >
            <el-col :span="12">
                <el-form-item label="所属项目">
                  <!--<el-input v-model="dataForm.projectName" auto-complete="off"></el-input>-->
                  <el-autocomplete
                    class="inline-input"
                    v-model="dataForm.projectName"
                    :fetch-suggestions="querySearch"
                    placeholder="请选择所属项目"
                  ></el-autocomplete>
                </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
                <el-form-item label="所属模块">
                  <el-input v-model="dataForm.moduleName" auto-complete="off"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="10">
                <el-form-item label="责任人">
                  <el-input v-model="dataForm.personInCharge" auto-complete="off"></el-input>
                </el-form-item>
            </el-col>
          </el-row>
          <el-row >

            <el-col :span="12">
                <el-form-item label="创建日期">
                  <el-date-picker type="date"  placeholder="选择日期" format="yyyy-MM-dd" value-format="yyyy-MM-dd" v-model="dataForm.createTime" @change="getSTime"></el-date-picker>
                </el-form-item>
            </el-col>
            <el-col :span="10" >
              <el-form-item label="优先级">
                <el-select v-model="dataForm.level" clearable placeholder="请选择" style="width: 190px !important;">
                  <el-option v-for="(item, idx) in levelOptions" :key="idx" :label="item.label" :value="item.value" >
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row >
            <el-col>
              <el-form-item label="状态">
                <el-switch v-model="dataForm.status" active-text="是" inactive-text="否">
              </el-switch>
              </el-form-item>
            </el-col>
          </el-row >
          <el-row >
            <el-col>
              <el-form-item label="详细描述" >
                <el-input type="textarea" style="min-width: 650px" v-model="dataForm.desc" :autosize="{ minRows: 4, maxRows: 4}"></el-input>
              </el-form-item>
            </el-col>
          </el-row >
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click.native="saveOrUpdate" :loading="addLoading" style="cursor:pointer;">提交</el-button>
          <el-button @click.native="dataFormVisible = false" >取消</el-button>
        </div>
      </el-dialog>
    </section>
    <div style='display:none;'>
      <iframe id="exportFile" style='display:none;'></iframe>
    </div>
  </div>
</template>

<script src="./bugManagement.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .container-main{
    padding-left: 10%;
    width: 80%;
    min-height: 100px;
    min-width:1424px;
    padding-bottom: 50PX;
  }
  .container-title{
    font-size: 1.5em;
    -webkit-margin-before: 3em;
    -webkit-margin-after: 3em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;

  }
  .dialog-footer{
    text-align: center;
  }
  .bugStatusOn{
    color: #13ce66;
    text-decoration:underline
  }
  .bugStatusOff{
    text-decoration:underline
  }
  .downloadLog {
    color:#4db3ff;
    cursor:pointer;
  }
</style>
