<template>
  <div class="mt__ten">
    <div class="sub__font">10월 예산</div>
    <div class="main__money__font">
      <span>1,000,000원</span>
      <i class="fas fa-edit edit-icon"></i>
    </div>
    <div>
      <div class="category-budget">
        <span class="mini__font">최근 3개월 평균 지출</span>
      </div>
      <div class="category-floating-right">
        <span class="mini__font">200,000만원</span>
      </div>
    </div>
    <div>
      <div class="category-budget">
        <span class="mini__font">지난달 지출</span>
      </div>
      <div class="category-floating-right">
        <span class="mini__font">300,000만원</span>
      </div>
    </div>
    <hr style="margin-top: 14px" />
    <div class="setting-section">
      <div>
        <div class="category-budget">
          <span class="mini__font">카테고리별 예산</span>
        </div>
        <div class="category-floating-right">
          <span class="mini__font">500,000원 남음</span>
        </div>
      </div>
      <span class="category-floating-right micro__font"
        >전체 예산 1,000,000원</span
      >
      <div class="main-setting">
        <div class="category__font category">
          <span class="category-icon-section">
            <i class="fas fa-utensils"></i>
          </span>
          <span>식비</span>
          <div class="category-floating-right">
            <v-text-field class="setting-text-area" label="금액"></v-text-field>
          </div>
          <div>
            <div class="category-budget">
              <span class="micro__font">지난달 500,000만원</span>
            </div>
          </div>
        </div>
        <div class="category__font category padding-text-area">
          <span class="category-icon-section">
            <i class="fas fa-shopping-bag"></i>
          </span>
          <span>쇼핑</span>
          <div class="category-floating-right">
            <v-text-field class="setting-text-area" label="금액"></v-text-field>
          </div>
          <div>
            <div class="category-budget">
              <span class="micro__font">지난달 500,000만원</span>
            </div>
          </div>
        </div>
        <div class="category__font category padding-text-area">
          <span class="category-icon-section">
            <i class="fas fa-coffee"></i>
          </span>
          <span>카페</span>
          <div class="category-floating-right">
            <v-text-field class="setting-text-area" label="금액"></v-text-field>
          </div>
          <div>
            <div class="category-budget">
              <span class="micro__font">지난달 500,000만원</span>
            </div>
          </div>
        </div>
        <div class="category__font category padding-text-area">
          <span class="category-icon-section">
            <i class="fas fa-bus "></i>
          </span>
          <span>교통</span>
          <div class="category-floating-right">
            <v-text-field class="setting-text-area" label="금액"></v-text-field>
          </div>
          <div>
            <div class="category-budget">
              <span class="micro__font">지난달 500,000만원</span>
            </div>
          </div>
        </div>
        <div class="category__font category padding-text-area">
          <span class="category-icon-section">
            <i class="fas fa-chess-pawn "></i>
          </span>
          <span>문화</span>
          <div class="category-floating-right">
            <v-text-field class="setting-text-area" label="금액"></v-text-field>
          </div>
          <div>
            <div class="category-budget">
              <span class="micro__font">지난달 500,000만원</span>
            </div>
          </div>
        </div>
        <div class="category__font category padding-text-area">
          <span class="category-icon-section">
            <i class="fas fa-envelope "></i>
          </span>
          <span>경조</span>
          <div class="category-floating-right">
            <v-text-field class="setting-text-area" label="금액"></v-text-field>
          </div>
          <div>
            <div class="category-budget">
              <span class="micro__font">지난달 500,000만원</span>
            </div>
          </div>
        </div>
        <div class="category__font category padding-text-area">
          <span class="category-icon-section">
            <i class="fas fa-won-sign "></i>
          </span>
          <span>금융</span>
          <div class="category-floating-right">
            <v-text-field class="setting-text-area" label="금액"></v-text-field>
          </div>
          <div>
            <div class="category-budget">
              <span class="micro__font">지난달 500,000만원</span>
            </div>
          </div>
        </div>
        <div class="category__font category padding-text-area">
          <span class="category-icon-section">
            <i class="fas fa-shopping-basket "></i>
          </span>
          <span>생활</span>
          <div class="category-floating-right">
            <v-text-field class="setting-text-area" label="금액"></v-text-field>
          </div>
          <div>
            <div class="category-budget">
              <span class="micro__font">지난달 500,000만원</span>
            </div>
          </div>
        </div>
        <div class="category__font category padding-text-area">
          <span class="category-icon-section">
            <i class="fas fa-book "></i>
          </span>
          <span>교육</span>
          <div class="category-floating-right">
            <v-text-field class="setting-text-area" label="금액"></v-text-field>
          </div>
          <div>
            <div class="category-budget">
              <span class="micro__font">지난달 500,000만원</span>
            </div>
          </div>
        </div>
        <div class="category__font category padding-text-area">
          <span class="category-icon-section">
            <i class="fas fa-hospital"></i>
          </span>
          <span>의료</span>
          <div class="category-floating-right">
            <v-text-field class="setting-text-area" label="금액"></v-text-field>
          </div>
          <div>
            <div class="category-budget">
              <span class="micro__font">지난달 500,000만원</span>
            </div>
          </div>
        </div>
      </div>
      <v-btn
        class="setting-button"
        style="background-color: rgb(253,185,19); color: white"
        elevation="2"
        >설 정</v-btn
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
