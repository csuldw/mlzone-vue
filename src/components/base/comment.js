import '../../assets/css/grid.styl';
import '../../assets/css/header.styl'; //引入外部css
import '../../assets/css/comment.styl'
import ElCol from "element-ui/packages/col/src/col";
import { saveOrUpdateComment, getCommentListByParam, login, getAuth } from "../../api/api"
import {checkCookie, getCookie, setCookie} from '../../common/js/cookieUtils.js'

export default {
  components: {ElCol},
  name: 'footer',
  props: [
    'filter'
  ],
  data() {
    return {
      filters: {
        pageNum : 1,
        pageSize : 0
      },
      commentLoading : false,
      msg: 'footer part',
      loginFormVisible: false,
      loginStatus : false,
      loginLoading: false,
      dataForm:{
        username: '',
        password: ''
      },
      total: 0,
      commentForm :{
        content: '',
        fromUserId:  1,
        toUserId: 1,
        articleId: 0,
        parentCommentId: 0
      },
      subCommentForm :{
        content: '',
        fromUserId:  1,
        toUserId: 1,
        articleId: 0,
        parentCommentId: 0
      },
      commentFormRules: {
        content: [
          // { required: true,message: '评论内容不能为空',trigger: 'blur' },
        ],
      },
      dataFormRules: {
        username: [
          { required: true,message: '请输入用户名',trigger: 'blur' },
        ],
        password: [
          {required: true, message: '请输入密码',trigger: 'blur'},
        ]
      },
      commentList : []
    }
  },
  methods: {
    loginSubmit: function () {
      this.$refs.dataForm.validate((valid) => {
        if (valid) {
          let para = Object.assign({}, this.dataForm);
          login(para).then((res) => {
            console.log("login:", res)
            if(res.result != null && res.result == "success")
            {
              this.$message({
                message: '登录成功',
                type: 'success'
              });
              let expireDays = 1000 * 60 * 60 * 24 * 15;
              setCookie('session', res.session, expireDays);
              this.$refs['dataForm'].resetFields();
              this.loginFormVisible = false
              this.loginStatus = true
              $("#before-comment").css("display", "none")
              $("#comment-main").css("display", "block")
            }
            else
            {
              this.$message({
                message: '登录失败，用户名或密码错误!',
                type: 'error'
              });
            }

          }).catch(function (error) {
            console.log(error);
          });
          this.checkLogin()
        }
      });
    },
    //显示新增界面
    handleLogin: function () {
      if(this.loginStatus === false){
        this.loginFormVisible = true;
      }
    },
    //保存一级评论
    saveComment: function () {
      // this.$refs.commentForm.validate((valid) => {
      //   if (valid) {
          this.commentForm = Object.assign({}, this.commentForm);
          let para = this.commentForm;
          if(this.commentForm.content === "" || this.commentForm.content == null)
          {
            this.$message({
              message: '评论内容为空!',
              type: 'error'
            });
            return
          }
          saveOrUpdateComment(para).then((res) => {
            this.$message({
              message: '评论成功',
              type: 'success'
            });
            this.$refs['commentForm'].resetFields();
            this.getCommentList();
          }).catch(function (error) {
            console.log(error);
          });
        // }
      // });
    },

    //保存子评论
    saveSubComment: function (parentCommentId) {
      this.subCommentForm = Object.assign({}, this.subCommentForm);
      //this.subCommentForm.fromUserId = ""
      this.subCommentForm.parentCommentId = parentCommentId
      let para = this.subCommentForm;

      if(this.subCommentForm.content === "" || this.subCommentForm.content == null)
      {
        this.$message({
          message: '评论内容为空!',
          type: 'error'
        });
        return
      }
      saveOrUpdateComment(para).then((res) => {
        this.$message({
          message: '评论成功',
          type: 'success'
        });
        this.subCommentForm.content = ""
        this.getCommentList();
        $("[id^='index']").each(function(){
          $(this).css("display","none");
        });
      }).catch(function (error) {
        alert(error)
        console.log(error);
      });
    },

    getCommentList : function () {
      let para = this.filter;
      this.commentLoading = true
      getCommentListByParam(para).then((res) => {
        this.total = res.data.total; //res.data.total;
        this.commentList = res.data.list; //res.data.articleList;
        this.commentLoading = false
      });
    },
    showReply : function (x) {
      // $(".u-comment-input").css("display", "none");
      if($("#" + x).css("display") == "block") {
        $("#" + x).css("display","none");
      }
      else {
        $("[id^='index']").each(function(){
          $(this).css("display","none");
        });
        $("#" + x).css("display","block");
      }


    },
    cancelSubComment : function () {
      // $(".u-comment-input").css("display", "block");
      $("[id^='index']").each(function(){
        $(this).css("display","none");
      });
    },

    login: function () {
      this.loginFormVisible = true
      // $("#before-comment").css("display", "none")
      // $("#comment-main").css("display", "block")
    },

    getAuth : function () {
      let para = "";
      getAuth(para).then((res) => {
        console.log(res)
      });
    },
    checkLogin(){
      //检查是否存在session
      //cookie操作方法在源码里有或者参考网上的即可
      if(!getCookie('session')){
        //如果没有登录状态则跳转到登录页
        console.log("not")
      }else{
        //否则跳转到登录后的页面
        console.log("success")
      }
    }
  },
  mounted () {
    this.getCommentList();
    this.getAuth();
    this.checkLogin();
  }
}
