<template>
  <div class="mt__ten pl__ten">
    <!-- <div>
      예산관리페이지
    </div> -->
    <!-- 예산설정 했을 때 -->

    <template v-if="isBudget">
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

      <div>
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
            @click="goAnalysis()"
            >분석</v-btn
          >
        </div>
      </div>

      <BudgetTopSection :categoryList="categoryList" />
      <BudgetBottomSection :month="this.date" :categoryList="categoryList" />
      <BudgetSideBar />
    </template>
    <!-- 예산설정 안했을 때 -->
    <template v-else>
      <BudgetNone />
    </template>
  </div>
</template>

<script>
import BudgetTopSection from "@/components/budget/BudgetTopSection.vue";
import BudgetBottomSection from "@/components/budget/BudgetBottomSection.vue";
import BudgetSideBar from "@/components/budget/BudgetSideBar.vue";
import BudgetNone from "@/components/budget/BudgetNone.vue";
import { fetchAllCategory } from "@/api/budget";

export default {
  components: {
    BudgetTopSection,
    BudgetBottomSection,
    BudgetSideBar,
    BudgetNone,
  },
  created() {
    this.getAllBudget();
  },
  methods: {
    monthChange() {
      this.$refs.menu.save(this.date);
      this.isChange = true;
      this.getAllBudget();
    },
    async getAllBudget() {
      if (!this.isChange) {
        this.allCategoryInfo.requestDate = new Date()
          .toISOString()
          .substr(0, 7);
        const category = await fetchAllCategory(this.allCategoryInfo).then(
          (res) => {
            this.categoryList = res.data;
          }
        );
        console.log(category);
      } else {
        this.allCategoryInfo.requestDate = this.date;
        const category = await fetchAllCategory(this.allCategoryInfo).then(
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
  data: () => ({
    isBudget: true,
    date: new Date().toISOString().substr(0, 7),
    menu: false,
    modal: false,
    isChange: false,
    allCategoryInfo: {
      userId: 1,
      requestDate: "",
    },
    categoryList: [],
    myData: [],
  }),
};
</script>

<style></style>
