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
      <BudgetTopSection />
      <BudgetBottomSection />
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
export default {
  data() {
    return {
      isBudget: true,
    };
  },
  components: {
    BudgetTopSection,
    BudgetBottomSection,
    BudgetSideBar,
    BudgetNone,
  },
};
</script>

<style></style>
