<template>
  <form class="form-section sub__font" action="" method="">
    <div class="element-form">
      <div class="add-spending-title">
        분류
      </div>
      <div id="radio" class="add-button-section">
        <input type="radio" id="spend" name="contact" value="지출" required />
        <label for="spend" class="add-button-padding">지출</label>

        <input type="radio" id="income" name="contact" value="수입" required />
        <label for="income" class="add-button-padding">수입</label>

        <input
          type="radio"
          id="transfer"
          name="contact"
          value="이체"
          required
        />
        <label for="transfer" class="add-button-padding">이체</label>
      </div>
    </div>

    <div class="element-form">
      <div class="add-spending-title">
        카테고리
      </div>
      <div class="selector-section">
        <v-select
          :items="items"
          label="선택"
          dense
          outlined
          aria-required="true"
        ></v-select>
      </div>
    </div>

    <div class="element-form">
      <div class="add-spending-title">
        거래처
      </div>
      <div class="text-section">
        <v-text-field label="입력" aria-required="true"></v-text-field>
      </div>
    </div>

    <div class="element-form">
      <div class="add-spending-title">
        결제수단
      </div>
      <div class="text-section">
        <v-text-field label="입력" aria-required="true"></v-text-field>
      </div>
    </div>

    <div class="element-form">
      <div class="add-spending-title">
        날짜
      </div>
      <div class="date-picker-section">
        <v-menu
          v-model="menu2"
          :close-on-content-click="false"
          :nudge-right="40"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="date"
              label="선택"
              prepend-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="date" @input="menu2 = false"></v-date-picker>
        </v-menu>
      </div>
    </div>

    <div class="element-form">
      <div class="add-spending-title">
        시간
      </div>
      <div class="date-picker-section">
        <input type="time" class="date-picker" required />
      </div>
    </div>
    <div class="success-button-section">
      <v-btn
        class="setting-button"
        style="background-color: rgb(253,185,19); color: white; width: 90%"
        type="submit"
        elevation="2"
        @click="addSpending"
        >설 정</v-btn
      >
    </div>
  </form>
</template>

<script>
export default {
  methods: {
    addSpending() {
      this.$swal({
        title: "내역 추가",
        icon: "success",
      });
      this.$router.push({
        name: "SpendingPage",
      });
    },
  },
  data: () => ({
    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    menu: false,
    modal: false,
    menu2: false,
    time: null,
    timeMenu: false,
    timeModal: false,
    items: [
      "식비",
      "쇼핑",
      "카페",
      "교통",
      "문화",
      "경조",
      "금융",
      "생활",
      "교육",
      "의료",
    ],
  }),
};
</script>

<style></style>
