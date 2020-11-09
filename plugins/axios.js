// 如果在插件里面需要获取到 nuxt 本身
// 需要 export default
  
export default function ({ $axios, redirect }) {
  // $axios.onError 是一个 nuxt 提供的辅助拦截器函数
  // 里面可以拦截到错误
  $axios.onError(err => {

    if(error.response.status === 500) {
        redirect('/error')
      }

    // 这里是每当出错的时候都会被拦截
    console.log(err);
    // 这个 err 是一个错误对象, log 的时候看不出来有什么用
    // 用 dir 可以看到里面的内容
    console.dir(err);
    console.log('错误信息是: ' + err.response.data.message);
    // 弹出一个提示告诉用户
    // this.$message.error('') 在这里由于不是组件内部, 没有 this 可以用
    // 可以单独引入element ui 当中的 Message 组件
    console.log(err.response.data.message || '系统错误') 
  })


  // 请求拦截
  $axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });
 
// 响应拦截
$axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });



}