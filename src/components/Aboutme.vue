<template>
    <div>Name: {{ name}} <br>Phone: {{ phone}} </div>
</template>

<script>
import axios from 'axios'
const Aboutme = {
  name: 'Aboutme',
  data () {
    return {
        name: undefined,
        phone: undefined
    }
  },
  //Fetching data before switching route
  beforeRouteEnter ( to, from, next) {
     // 在渲染该组件的对应路由被 confirm 前调用
     // 不！能！获取组件实例 `this`
     // 因为当钩子执行前，组件实例还没被创建
      axios.post( 'https://schematic-ipsum.herokuapp.com/' , {
      //axios.post( 'https://schemati/' , {  // present error case
        "type": "object",
        "properties": {
            "name": {
                "type": "string",
                "ipsum": "name"
            } ,
            "phone": {
                "type": "string",
                "format": "phone"
            }
        }
        }).then( response => {
            //NProgress.done()  //since global guard did this, no need to invoke here
            next( vm => {
            vm.name = response.data.name
            vm.phone = response.data.phone
            })
        }).catch(error=>{
            //vm0.data.showError = true
            from.matched[0].instances.default.$parent.showError = true
            next(false)
        })
  },
  beforeRouteUpdate (to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
    next();
  },
  beforeRouteLeave (to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    next();
  }
  
}
export default Aboutme
</script>