import '../../assets/css/grid.styl';
import '../../assets/css/header.styl'; //引入外部css
import '../../assets/css/comment.styl'
import ElCol from "element-ui/packages/col/src/col";
import { saveOrUpdateComment, getCommentListByParam, login, getAuth, saveOrUpdateUser, checkUserExistByUsername } from "../../api/api"
import cookieUtils from '../../common/js/cookieUtils.js'

export default {
  components: {ElCol},
  name: 'footer',
  props: [
    'filter',
    'articleId',
    'articleUserId'
  ],
  data() {
    let validPassword = (rule, value, callback) => {
      if(this.password2 === null){
        callback(new Error('请确认密码!'));
      }
      if(this.dataForm.password !== this.password2) {
        callback(new Error('两次密码不一致，请重新输入!'))
      }
      callback();
    };
    let checkUsername = (rule, value, callback) => {
      let para = {
        'username': value
      }
      checkUserExistByUsername(para).then(function (res) {
        if (res.result === "success" && res.isExist === true) {
          callback("用户名已被占用!")
        } else {
          callback()
        }
      })
        .catch(function () {
          callback(new Error('服务异常'))
        })
    };
    return {
      filters: {
        pageNum : 1,
        pageSize : 0,
        articleId : '',
      },
      commentLoading : false,
      msg: 'footer part',
      loginFormVisible: false,
      regFormVisible: false,
      loginStatus : false,
      loginLoading: false,
      dataForm:{
        id: 0,
        username: '',
        nickname: '',
        password: '',
        sex: 0,
        birthday: '',
        address: '',
        userType: 1
      },
      password2:'',
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
          { min: 2,max: 25,message: '长度在 4 到 25 个字符'}
        ],
        password: [
          {required: true, message: '请输入密码',trigger: 'blur'},
          {min: 6,max: 32,message: '长度在 6 到 30 个字符'},
        ]
      },
      regFormRules: {
        username: [
          { validator: checkUsername, trigger: 'blur' },
          { required: true,message: '请输入用户名',trigger: 'blur' },
          { min: 2,max: 25,message: '长度在 4 到 25 个字符'}
        ],
        password: [
          {required: true, message: '请输入密码',trigger: 'blur'},
          {min: 6,max: 32,message: '长度在 6 到 30 个字符'},
        ],
        password2: [
          {required: true, trigger: 'blur', validator: validPassword }
        ]
      },
      commentList : [],
      isAuth : false,
      userId : '',
      tokenId: '',
      toUserId :''
    }
  },
  computed:{

  },
  methods: {
    //编辑
    regSubmit: function () {
      this.$refs.dataForm.validate((valid) => {
        if (valid) {
          this.$confirm('确认提交吗？', '提示', {}).then(() => {
            let para = Object.assign({}, this.dataForm);
            saveOrUpdateUser(para).then((res) => {
              this.$message({
                message: '提交成功',
                type: 'success'
              });
              this.toLogin();
              this.$refs['dataForm'].resetFields();
              this.loginFormVisible = false;
              this.regFormVisible = false;
            });
          });
        }
      });
    },
    toLogin: function () {
      let para = Object.assign({}, this.dataForm);
      login(para).then((res) => {
        console.log("login:", res)
        if(res.msg != null && res.msg == "success")
        {
          this.$message({
            message: '登录成功',
            type: 'success'
          });
          this.userId = res.data.userId;
          this.tokenId = res.data.tokenId;
          cookieUtils.setAuthData(this.tokenId, this.userId);

          let expireDays = 1000 * 60 * 60 * 24 * 15;
          cookieUtils.setCookie('session', res.session, expireDays);
          this.$refs['dataForm'].resetFields();
          this.loginFormVisible = false
          this.loginStatus = true
          this.getAuth();
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
    },
    loginSubmit: function () {
      this.$refs.dataForm.validate((valid) => {
        if (valid) {
          this.toLogin();
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
          this.commentForm.articleId = this.articleId;
          this.commentForm.fromUserId = cookieUtils.getUserId();
          this.commentForm.toUserId = this.articleUserId;
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
    },

    //保存子评论
    saveSubComment: function (parentCommentId) {
      this.subCommentForm.articleId = this.articleId;
      this.subCommentForm.fromUserId = cookieUtils.getUserId();
      this.subCommentForm.parentCommentId = parentCommentId
      this.subCommentForm.toUserId = this.toUserId;
      this.subCommentForm = Object.assign({}, this.subCommentForm);
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
        console.log(error);
      });
    },

    getCommentList : function () {
      this.filters.articleId = this.articleId;
      let para = this.filters;
      this.commentLoading = true
      getCommentListByParam(para).then((res) => {
        this.total = res.commentCount; //res.data.total;
        this.commentList = res.data.list; //res.data.articleList;
        this.commentLoading = false
      });
    },
    showReply : function (x, userId) {
      this.toUserId = userId;
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
      $("[id^='index']").each(function(){
        $(this).css("display","none");
      });
    },

    login: function () {
      this.loginFormVisible = true
    },
    reg: function () {
      this.regFormVisible = true
    },
    logout: function () {
      this.$confirm('确认退出登录吗？', '提示', {}).then(() => {
        this.$message({
          message: '您已退出登录！',
          type: 'success'
        });
        localStorage.clear();
        getAuth();
        $("#before-comment").css("display", "block");
        $("#comment-main").css("display", "none");
        $("[id^=comment-reply]").css("display", "none")
      })
    },
    getAuth : function () {
      let para = "";
      getAuth(para).then((res) => {
        if(res.data.code == 1000){
          this.isAuth = true;
        }
        else{
          this.isAuth = false;
        }
        this.checkLogin();
      });
    },
    checkLogin(){
      if(this.isAuth == true){
        $("#before-comment").css("display", "none")
        $("#comment-main").css("display", "block")
        $("[id^=comment-reply]").css("display", "block")
      }else{
        $("#before-comment").css("display", "block")
        $("#comment-main").css("display", "none")
        $("[id^=comment-reply]").css("display", "none")
      }
    },
    generateId(prefix, index) {
      return prefix + index;
    },
    getUsernameByComment(comment, userType){
      if(comment !== null){
        if(comment.userEntityFrom !== null && userType ==="from") {
          return comment.userEntityFrom.username;
        }
        if(comment.userEntityTo !== null && userType ==="to") {
          return comment.userEntityTo.username;
        }
      }
      return "-1";
    }
  },
  mounted () {
    this.getCommentList();
    this.getAuth();
  },
  updated:function(){
    this.$nextTick(function(){
      this.checkLogin();
    })
  },


}
