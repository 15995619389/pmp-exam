<<template>
  <div class="index">
      <headerbox></headerbox>
      <navPage></navPage>
      <intelligebt></intelligebt>
  </div>
</template>
<<script>
import headerbox from '../header/header.vue'
import navPage from '../nav/nav.vue'
import intelligebt from'../nav/intelligentTest.vue'
export default {
  data(){
      return{

      }
  },
  components:{
      headerbox,
      intelligebt,
      navPage
  }
}
</script>
<style lang="less" scoped>

</style>


