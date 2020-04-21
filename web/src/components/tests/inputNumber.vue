<template>
    <div class="mobile-contaniner">
        <input type="number" id="number" v-model="inputValue">
    </div>
</template>
<script>
export default {
  name: 'inputNuber',
  data () {
    return {
      inputValue: '',
      inputStatus: false,
      changeRule: [
        // 首位不能输入0
        ['^0', ''],
        // 小数点后两位
        ['^(\\d+\\.\\d{2}).+', '$1']
      ]
    }
  },
  watch: {
    inputValue (newVal, oldVal) {
      console.log('change', newVal, oldVal)
      // 1.2.2会自动变成1.2
      if (newVal === '' && oldVal.toString().indexOf('.') > 0) {
        this.inputValue = oldVal
      }
    }
  },
  methods: {
    doReg (v) {
      for (let index = 0; index < this.changeRule.length; index++) {
        var reg = new RegExp(this.changeRule[index][0])
        v = v.replace(reg, this.changeRule[index][1])
        // v = v.replace(this.changeRule[index][0], this.changeRule[index][1])
      }
      return v
    }
  },
  mounted () {
    var self = this
    var ipt = document.getElementById('number')
    ipt.addEventListener('keyup', function () {
      console.log('keyup')
      if (this.value.toString().length === 1) {
        if (!/^\d+$/.test(this.value)) {
          this.value = ''
        }
      }
      this.value = self.doReg(this.value)
    })
  }
}
</script>
<style lang="css">
.mobile-contaniner{
  margin-top: 20px;
}
</style>
