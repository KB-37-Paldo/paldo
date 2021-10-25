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
    <SpendingTopSection style="max-height: 50px" :spendinglist="spendinglist" />
    <SpendingBottomSection />
    <template>
      <BudgetSideBar />
    </template>
  </div>
</template>

<script>
import BudgetSideBar from "@/components/budget/BudgetSideBar.vue";
import SpendingTopSection from "@/components/budget/SpendingTopSection.vue";
import SpendingBottomSection from "@/components/budget/SpendingBottomSection.vue";
export default {
  methods: {
    async monthChange() {
      console.log(this.date);
      // const res = await apimethods(this.date).then((res) => {
      //   this.spendinglist = res.data
      // })
    },
  },
  components: {
    BudgetSideBar,
    SpendingTopSection,
    SpendingBottomSection,
  },
  data: () => ({
    date: new Date().toISOString().substr(0, 7),
    menu: false,
    modal: false,
    spendinglist: "carddfsdfsfsdfsdfdsf",
  }),
};
</script>

<style></style>
