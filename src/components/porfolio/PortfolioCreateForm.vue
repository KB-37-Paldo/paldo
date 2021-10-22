<template>
  <div class="pl__ten">
    <!-- User -->
    <div class="mt__ten">
      <span class="block mb__five title__font">
        {{userInfo.userName}}님의
      </span>
    </div>
      <!-- 1단계 -->
    <div v-show="step==1 ? true:false">
      <div>
        <span class="title__font">
          정보가 정확한가요?
        </span>
      </div>
      <div class="mt__ten mb__five">
        <span class="title__font">나이</span>
        <span class="title__font right">{{userInfo.userAge}}살</span>
      </div>
      <div class="mb__ten">
        <span class="title__font">월소득</span>
        <span class="title__font right">{{userInfo.userIncome}}원</span>
      </div>
    </div>
    <!-- 2단계 -->
    <div v-show="step==2 ? true:false">
      <div>
        <span class="title__font__little">
          투자유형은 무엇인가요?
        </span>
      </div>
      <div class="mt__ten context__font mb__five__vh">
        <div v-for="(type,index) in investType" :key="index" class="mb__five checks">
          <input type="radio" name="chk_invest" :value="type" :id="type"
          class="button__radio" checked>
          <label class="button" :for="type">{{type}}</label>
        </div>
      </div>
    </div>
    <!-- 3단계 -->
    <div v-show="step==3 ? true:false">
      <div>
        <span class="title__font__little">
          목표기간은 언제인가요?
        </span>
      </div>
      <div class="mt__ten mb__ten">
        <form>
          <p><input type="date"  :value="today"
          class="input" :min="today" :max="maxDate"></p>
        </form>
      </div>
    </div>
    <!-- 4단계 -->
    <div v-show="step==4 ? true:false">
      <div>
        <span class="title__font__little">
          목표금액은 얼마인가요?
        </span>
      </div>
      <div class="mt__ten mb__ten">
        <input class="input" type="number" min="0" placeholder="100000000" required>
      </div>
    </div>
    <!-- 진행 progress 바 -->
    <div v-show="step!=4 ? true:false">
      <span class="title__font">다음으로 넘어가기</span>
      <span class="color__yellow right pointer"
        @click="nextStep"
        >
          <i class="fas fa-arrow-alt-circle-right"></i>
        </span>
    </div>
    <div v-show="step==4 ? true:false">
      <span class="title__font">포트폴리오 생성하기</span>
      <span class="color__yellow right pointer"
        @click="createPort"
        >
          <i class="far fa-check-circle"></i>
      </span>
    </div>
    <div class="color__yellow">
      <meter class="meter color__yellow w-100" min="0" max="4" :value="step"></meter>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      step:1,
      userInfo : {
        userName: '전국구',
        userAge: 28,
        userIncome: '3,000,000'
      },
      investType : ['공격투자형', '적극투자형','위험중립형','안정추구형','안정형'],
      today:"yyyy-MM-dd",
      maxDate:"yyyy-MM-dd"
    }
  },
  methods: {
    nextStep() {
      this.step += 1;
    },
    checkToday() {
      let todayDate = new Date();   
      let year = todayDate.getFullYear(); // 년도
      let month = todayDate.getMonth() + 1;  // 월
      let date = todayDate.getDate();  // 날짜
      this.today = `${year}-${month}-${date}`
      this.maxDate = `${year+80}-${month}-${date}`
    },
    createPort() {
      this.$swal({
        title:'포트폴리오생성',
        icon:'success'
      })
      this.$emit('isPortfolio',true);
    }
  },
  created() {
    this.checkToday()
  }
}
</script>

<style>
</style>