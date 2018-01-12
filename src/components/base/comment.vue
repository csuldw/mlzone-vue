<template>
  <div class="g-container-comment">
    <div id="comment-list" class="u-comment-list">
      <div id="before-comment" style="text-align: center;height: 50px;">
        目前您尚未登录，请 <a @click="login">登录</a> 或 <a @click="reg">注册</a> 后进行评论
      </div>

      <!--登录界面-->
      <el-dialog title="登录" @keyup.enter.native="loginSubmit" v-model="loginFormVisible" :close-on-click-modal="false" class="el-dialog-login" style="width:800px;">
        <el-form :model="dataForm" label-width="100px" :rules="dataFormRules" ref="dataForm" style="text-align:center;">
          <el-row >
            <el-col :span="18">
              <el-form-item label="用户名：" prop="username">
                <el-input  v-model="dataForm.username" auto-complete="off" >111</el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row >
            <el-col :span="18">
              <el-form-item label="密码：" prop="password">
                <el-input  v-model="dataForm.password" auto-complete="off" type="password">111</el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
        <div slot="footer" class="dialog-footer" style="text-align: center">
          <el-button @click.native="loginFormVisible=false"> &nbsp;取消&nbsp;</el-button>
          <el-button type="primary" @click.native="loginSubmit" :loading="loginLoading">&nbsp;登录&nbsp;</el-button>
        </div>
      </el-dialog>

      <!--登录界面-->
      <el-dialog title="注册" @keyup.enter.native="regSubmit" v-model="regFormVisible" :close-on-click-modal="false" class="el-dialog-login" style="width:800px;">
        <el-form :model="dataForm" label-width="100px" :rules="regFormRules" ref="dataForm" style="text-align:center;">
          <el-row >
            <el-col :span="18">
              <el-form-item label="用户名：" prop="username">
                <el-input  v-model="dataForm.username" auto-complete="off" >111</el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row >
            <el-col :span="18">
              <el-form-item label="密码：" prop="password">
                <el-input  v-model="dataForm.password" auto-complete="off" type="password">111</el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row >
            <el-col :span="18">
              <el-form-item label="密码确认：" prop="password2">
                <el-input  v-model="password2" auto-complete="off" type="password">111</el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
        <div slot="footer" class="dialog-footer" style="text-align: center">
          <el-button @click.native="regFormVisible=false"> &nbsp;取消&nbsp;</el-button>
          <el-button type="primary" @click.native="regSubmit" :loading="loginLoading">&nbsp;登录&nbsp;</el-button>
        </div>
      </el-dialog>

      <div id="comment-main" class="u-comment-input" style="display: none">
        <el-form :model="commentForm" class="new-comment" ref="commentForm" ><!-- :rules="commentFormRules"-->
            <a class="avatar">
              <img src="../../../static/image/noavatar_middle.gif"></a>
          <el-form-item prop="content">
            <el-input v-model="commentForm.content" @click="handleLogin" style="resize:none !important;"  :autosize="{minRows: 4, maxRows:6}" type="textarea"  :rows="2"  placeholder="写下你的评论..." ></el-input>
          </el-form-item>
          <div class="write-function-block">
              <div data-v-b36e9416="" class="emoji-modal-wrap">
                <a data-v-b36e9416="" class="emoji">
                  <i data-v-b36e9416="" class="iconfont ic-comment-emotions"></i></a>
              </div>
            <a class="btn btn-send" type="primary" @click="saveComment" :loading="commentLoading">&nbsp;发送</a>
            <a class="cancel" @click="logout" >退出</a>
          </div>
        </el-form>
      </div>

      <div id="normal-comment-list" class="normal-comment-list">
        <div>
          <div>
            <div class="top">
              <span>{{ total }}条评论</span>
              <a class="close-btn" style="display: none;">关闭评论</a>
              <div class="pull-right">
                <a class="">按时间正序</a><a class="">按时间倒序</a>
              </div>
            </div>
          </div>

          <!-- 评论 -->
          <div id="comment-17064420" class="comment-item" v-for="( comment, index) in commentList" >
              <div class="author"><a href="/u/c98a25c65544" target="_blank" class="avatar">
                <img src="../../../static/image/noavatar_middle.gif"></a>
                <div class="comment-header">
                  <a href="/u/c98a25c65544" target="_blank" class="name">
                  <span style="color: #4093c6;">{{ getUsernameByComment(comment, "from") }} </span>
                  </a>
                  <span style="color: #ccc;">{{ comment.sendDate }} </span> <span style="color: #ccc; float:right;">{{ index + 1 }}楼 </span>
                </div>
              </div>
              <div class="comment-wrap"><span>{{ comment.content }}</span>
                <div class="tool-group">
                  <a class="" @click="showReply('index' + index, comment.fromUserId)">
                    <i class="iconfont ic-comment"></i>
                    <span style="color: #4093c6;" :id="generateId('comment-reply', index)">回复</span>
                  </a>
                </div>
                <div :id="'index' + index" style="display: none;">
                  <el-form :model="subCommentForm" class="new-comment" ref="subCommentForm" > <!--:rules="commentFormRules"-->
                    <el-form-item prop="subContent">
                      <el-input v-model="subCommentForm.content" @click="handleLogin" style="resize:none !important;"  :autosize="{minRows: 4, maxRows:6}" type="textarea"  :rows="2"  placeholder="写下你的评论..." ></el-input>
                    </el-form-item>
                    <div class="write-function-block">
                      <a class="btn btn-send" type="primary" @click="saveSubComment(comment.id)" :loading="commentLoading">&nbsp;发送</a>
                      <a class="cancel" @click="cancelSubComment">取消</a>
                    </div>
                  </el-form>
                </div>
              </div>

              <div class="sub-comment-list" v-for="(subComment, index) in  comment.subCommentEntity" v-if="subComment !='null'">
                <div class="author"><a href="/u/c98a25c65544" target="_blank" class="avatar">
                  <img src="//upload.jianshu.io/users/upload_avatars/8191521/e5473c34-1a23-45f8-a99e-4ad4adf73987?imageMogr2/auto-orient/strip|imageView2/1/w/114/h/114"></a>
                  <div class="comment-header">
                    <a href="/u/c98a25c65544" target="_blank" class="name">
                      <span style="color: #4093c6;">{{ getUsernameByComment(subComment,"from")}} </span>
                    </a> <!---->
                    <span style="color: #ccc;">{{ subComment.sendDate }} </span>
                  </div>
                </div>
                <div class="sub-comment-content">回复 {{ getUsernameByComment(subComment, "to") }}：{{ subComment.content}}</div>
              </div>
            </div>
          </div>
        </div>
      </div> <!---->
      <div><!----></div>
    </div>
</template>

<script src="./comment.js">
</script>

<style >
  .el-dialog-login{
    position:fixed;
    top:5%;
    right:0;
    left:0;
    bottom:0;
    margin:auto;
    width: 1000px;
  }
  .el-textarea__inner{
    max-height: 90px !important;
  }
  .el-message__group p {
    font-size: 14px;
    margin: 5px 34px 0 0 !important;
    color: #8391a5;
    text-align: justify;
  }
</style>
