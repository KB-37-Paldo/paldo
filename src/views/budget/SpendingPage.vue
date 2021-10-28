<template>
  <div class="mt__ten pl__ten">
    <!-- <div>
      지출관리페이지
    </div> -->
    <v-menu
      ref="menu"
      v-model="menu"
      :close-on-content-click="false"
      :return-value.sync="date"
      transition="scale-transition"
      offset-y
      max-width="290px"
      min-width="auto"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          class="picker-font"
          v-model="date"
          label=""
          prepend-icon="mdi-calendar"
          readonly
          v-bind="attrs"
          v-on="on"
        ></v-text-field>
      </template>
      <v-date-picker v-model="date" type="month" no-title scrollable>
        <v-spacer></v-spacer>
        <v-btn text color="primary" @click="menu = false">
          Cancel
        </v-btn>
        <v-btn text color="primary" @click="monthChange">
          OK
        </v-btn>
      </v-date-picker>
    </v-menu>

    <div style="margin-bottom: -100px">
      <div>
        <span style="font-size: 25px">지출 </span>
        <span style="font-size: 30px"
          >{{ changeMoney(categoryList.totalOutlay) }}원</span
        >
      </div>
      <div>
        <span style="font-size: 25px">수입 </span>
        <span style="font-size: 30px"
          >{{ changeMoney(categoryList.totalIncome) }}원</span
        >
      </div>
      <div class="anaysis-button-section">
        <v-btn
          style="background-color: rgb(253,185,19); color: white; cursor: pointer; z-index: 5;"
          elevation="2"
          @click="goAnalysis"
          >분석</v-btn
        >
      </div>
    </div>
    <SpendingBottomSection :spendingList="spendingList" />
    <template>
      <BudgetSideBar />
    </template>
  </div>
</template>

<script>
import BudgetSideBar from "@/components/budget/BudgetSideBar.vue";
import SpendingBottomSection from "@/components/budget/SpendingBottomSection.vue";
import { fetchSpending, fetchAllCategory } from "@/api/budget";

export default {
  created() {
    this.getSpending();
  },
  methods: {
    monthChange() {
      this.$refs.menu.save(this.date);
      this.isChange = true;
      this.getSpending();
    },
    async getSpending() {
      if (!this.isChange) {
        this.spendingData.requestDate = new Date().toISOString().substr(0, 7);
        const spending = await fetchSpending(this.spendingData).then((res) => {
          this.spendingList = res.data;
        });
        console.log(spending);
        const category = await fetchAllCategory(this.spendingData).then(
          (res) => {
            this.categoryList = res.data;
          }
        );
        console.log(category);
      } else {
        this.spendingData.requestDate = this.date;
        const spending = await fetchSpending(this.spendingData).then((res) => {
          this.spendingList = res.data;
        });
        console.log(spending);
        const category = await fetchAllCategory(this.spendingData).then(
          (res) => {
            this.categoryList = res.data;
          }
        );
        console.log(category);
      }
    },
    goAnalysis() {
      this.$router.push({
        name: "AnalysisPage",
        params: { month: this.date, categoryList: this.categoryList },
      });
    },
    changeMoney(amount) {
      return amount.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    },
  },
  components: {
    BudgetSideBar,
    SpendingBottomSection,
  },
  data: () => ({
    date: new Date().toISOString().substr(0, 7),
    menu: false,
    modal: false,
    isChange: false,
    spendingData: {
      userId: 1,
      requestDate: "",
    },
    spendingList: [],
    categoryList: [],
  }),
};
</script>

<style></style>
