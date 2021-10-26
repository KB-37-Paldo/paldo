<template>
  <div class="pl__ten">
    <!-- User -->
    <div class="mt__ten">
      <span class="block mb__five title__font">
        {{userInfo.name}}님의
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
        <div class="title__font">나이</div>
        <v-text-field class="title__font" :placeholder="String(userInfo.age)"
        ref="userAge"
        @keyup="upDateUserAge"></v-text-field>
      </div>
      <div class="mt__fiveVh mb__ten">
        <div class="title__font">연봉</div>
          <v-text-field class="sub__font"
          hide-details="auto"
          :placeholder="String(userInfo.salary)"
          ref="userIncome"
          @keyup="upDateUserIncome"
          ></v-text-field>
      </div>
    </div>
    <!-- 2단계 -->
    <div v-show="step==2 ? true:false">
      <div>
        <span class="title__font__little">
          투자유형은 무엇인가요?
        </span>
      </div>
      <div class="mt__ten context__font mb__five__vh"
      @click="updateInvestType"
      >
        <div v-for="(type,index) in investType" :key="index" class="mb__five checks">
          <input type="radio" name="chk_invest" :value="type" :id="type"
          class="button__radio">
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
        <p>
          <input type="date"  :value="today"
          class="input" :min="today" :max="maxDate" ref="targetDate">
        </p>
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
        <input class="input" type="number" min="0" placeholder="100000000" required v-model="userTargetMoney">
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
import { mapState } from 'vuex'
import {createPortfolio} from '@/api/portfolio'

export default {
  data() {
    return {
      step:1,
      investType : ['공격투자형', '적극투자형','위험중립형','안정추구형','안정형'],
      today:"yyyy-MM-dd",
      maxDate:"yyyy-MM-dd",
      userInvestType : '',
      userTargetDate:'',
      userTargetMoney:'',
    }
  },
  
  created() {
    this.checkToday()
  },
  computed: {
    ...mapState({
      userInfo : state => state.portfolio.userInfo
    })
  },
  methods: {
    nextStep() {
      if (this.step == 2 && this.userInvestType == '') {
        this.$swal({
          title: '투자유형을 \n 선택해주세요!',
          icon:'warning'
        })
      } else if (this.step == 3) {
        this.fetchTargetDate();
        this.step += 1;
      } else {
        this.step += 1;
      }
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
      if (this.userTargetMoney == '') {
        this.$swal({
          title: '목표금액을 \n 입력해주세요!',
          icon:'warning'
        })
      } else {
        const portfolioInfo = {
            investType: this.userInvestType,
            targetPeriod: this.userTargetDate,
            targetPrice: this.userTargetMoney,
            userId: this.userInfo.userId
          }
          console.log('포트폴리오데이터',portfolioInfo)

          const portfolio = createPortfolio(portfolioInfo).then((res) => {
            if (res.status === 201) {
              this.$swal({
              title:'포트폴리오생성',
              icon:'success'
            })
            this.$store.dispatch('fetchRecommendPortfolioInfo');
            this.$store.dispatch('LOGIN');
            this.$router.push({
              name:'PortfolioRecommendPage'
            });
            } else {
              this.$swal({
              title:'포트폴리오 생성 실패',
              icon:'warning'
            })
            }
          })
          console.log(portfolio)

        
      }
    },
    upDateUserAge() {
      const age = this.$refs.userAge.lazyValue;
      console.log('유저나이?',age)
      this.userInfo.age = age;
    },
    upDateUserIncome() {
      const income = this.$refs.userIncome.lazyValue;
      console.log('유저수입?',income)
      this.userInfo.salary = income;
    },
    updateInvestType() {
      const investType = document.querySelector('input[name="chk_invest"]:checked');
      if (investType) {
        console.log(investType.value,'유저의 투자성향')
        this.userInvestType = investType._value;
        console.log(this.userInvestType)
      }
    },
    fetchTargetDate() {
      this.userTargetDate = this.$refs.targetDate.value
    } 
  },

}
</script>

<style>
</style>