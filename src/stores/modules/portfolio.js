import { fetchPortfolio, fetchUserAsset, fetchUserInfo, shareAgePortfolio, shareAssetPortfolio, shareInvestPortfolio } from '../../api/portfolio';


const state = {
    LoadingStatus: false,
    userInfo : sessionStorage.getItem('userInfo') === null ? {
        userId: 1,
        name: "전국구",
        age: 27,
        salary: 80000000,
        portfolio: false,
        _links: {
            self: {
                href: "http://paldo.169.56.174.130.nip.io/portfolio-service/user/1"
            },
            portfolio: {
                href: "http://paldo.169.56.174.130.nip.io/portfolio-service/portfolio/1"
            }
        } 
    } : JSON.parse(sessionStorage.getItem('userInfo')),
    recommendPortfolioInfo : sessionStorage.getItem('recommendPortfolioInfo') === null ? {
        bondAmount: 12,
        cashAmount: 50,
        createAt: "2021-10-25",
        fundAmount: 15,
        goldAmount: 3,
        investType: "공격투자형",
        description:"안정적인 목표를 선택하셨습니다. 위험성이 적은 포트폴리오에 투자성향을 반영하여 추천드렸습니다.",
        links: {
            empty: true
        },
        portfolioId: 95,
        realEstateAmount: 1,
        stockAmount: 9,
        targetPeriod: "2025-12-31",
        targetPrice: 300000000,
        userId: 1
        } : JSON.parse(sessionStorage.getItem('recommendPortfolioInfo')),
    agePortfolioList : sessionStorage.getItem('agePortfolioList') === null ? [
    {
      portfolioId: 32,
      investType: "공격투자형",
      targetPrice: 500000000,
      targetPeriod: "2021-10-21",
      createAt: "2021-10-23",
      userId: 2,
      cashAmount: 50,
      stockAmount: 20,
      goldAmount: 10,
      bondAmount: 10,
      fundAmount: 5,
      realEstateAmount: 5
    },
    {
      portfolioId: 32,
      investType: "공격투자형",
      targetPrice: 300000000,
      targetPeriod: "2025-12-31",
      createAt: "2021-10-23",
      userId: 2,
      cashAmount: 40,
      stockAmount: 29,
      goldAmount: 3,
      bondAmount: 12,
      fundAmount: 15,
      realEstateAmount: 1
    },
  ]:JSON.parse(sessionStorage.getItem('agePortfolioList')),
  assetPortfolioList : sessionStorage.getItem('assetPortfolioList') === null ? [
    {
      portfolioId: 32,
      investType: "공격투자형",
      targetPrice: 500000000,
      targetPeriod: "2021-10-21",
      createAt: "2021-10-23",
      userId: 2,
      cashAmount: 40,
      stockAmount: 30,
      goldAmount: 15,
      bondAmount: 5,
      fundAmount: 5,
      realEstateAmount: 5
    },
    {
      portfolioId: 32,
      investType: "공격투자형",
      targetPrice: 300000000,
      targetPeriod: "2025-12-31",
      createAt: "2021-10-23",
      userId: 2,
      cashAmount: 30,
      stockAmount: 40,
      goldAmount: 15,
      bondAmount: 5,
      fundAmount: 13,
      realEstateAmount: 2
    }
  ]:JSON.parse(sessionStorage.getItem('assetPortfolioList')),
  investPortfolioList : sessionStorage.getItem('investPortfolioList') === null ? [
    {
      portfolioId: 32,
      investType: "공격투자형",
      targetPrice: 500000000,
      targetPeriod: "2021-10-21",
      createAt: "2021-10-23",
      userId: 2,
      cashAmount: 10,
      stockAmount: 60,
      goldAmount: 10,
      bondAmount: 10,
      fundAmount: 5,
      realEstateAmount: 5
    },
    {
      portfolioId: 32,
      investType: "공격투자형",
      targetPrice: 300000000,
      targetPeriod: "2025-12-31",
      createAt: "2021-10-23",
      userId: 2,
      cashAmount: 20,
      stockAmount: 50,
      goldAmount: 10,
      bondAmount: 10,
      fundAmount: 5,
      realEstateAmount: 5
    }
  ]:JSON.parse(sessionStorage.getItem('investPortfolioList')),
  userAssetList : sessionStorage.getItem('userAssetList') ? {
  targetPrice: 300000000,
  targetDate: "2025-12-31",
  totAmount: 178882694,
  cashAmount: 39.5,
  stockAmount: 32.5,
  goldAmount: 14.2,
  bondAmount: 4.1,
  fundAmount: 4.9,
  realEstateAmount: 4.8,
  cash: {
    totAmount: 70652100,
    data: [
      {
        holdingsId: 0,
        amount: 36852100,
        detailType: "KB종합통장",
        assetType: "현금성"
      },
      {
        holdingsId: 1,
        amount: 25800000,
        detailType: "KB내맘대로적금",
        assetType: "현금성"
      },
      {
        holdingsId: 3,
        amount: 8000000,
        detailType: "청년우대형 주택청약종합저축",
        assetType: "현금성"
      }
    ]
  },
  stock: {
    totAmount: 58105283,
    data: [
      {
        holdingsId: 4,
        amount: 45627153,
        detailType: "삼성전자",
        assetType: "주식"
      },
      {
        holdingsId: 5,
        amount: 12478130,
        detailType: "네이버",
        assetType: "주식"
      }
    ]
  },
  realAssets: {
    totAmount: 25320418,
    data: [
      {
        holdingsId: 8,
        amount: 5432812,
        detailType: "KB스타 골드",
        assetType: "금"
      },
      {
        holdingsId: 9,
        amount: 3524154,
        detailType: "천연가스",
        assetType: "금"
      },
      {
        holdingsId: 10,
        amount: 8455176,
        detailType: "금",
        assetType: "금"
      },
      {
        holdingsId: 11,
        amount: 3541625,
        detailType: "은",
        assetType: "금"
      },
      {
        holdingsId: 12,
        amount: 4366651,
        detailType: "구리",
        assetType: "금"
      }
    ]
  },
  bond: {
    totAmount: 7390379,
    data: [
      {
        holdingsId: 13,
        amount: 2142615,
        detailType: "하이트진로128-2 ",
        assetType: "채권"
      },
      {
        holdingsId: 14,
        amount: 1846541,
        detailType: "GS글로벌22-2",
        assetType: "채권"
      },
      {
        holdingsId: 15,
        amount: 1985427,
        detailType: "세아베스틸74-3",
        assetType: "채권"
      },
      {
        holdingsId: 16,
        amount: 1415796,
        detailType: "금호석유화학154-2",
        assetType: "채권"
      }
    ]
  },
  fund: {
    totAmount: 8764514,
    data: [
      {
        holdingsId: 7,
        amount: 8764514,
        detailType: "마이다스거북이90증권자투자신탁 1(주식)A",
        assetType: "펀드"
      }
    ]
  },
  realEstate: {
    totAmount: 8650000,
    data: [
      {
        holdingsId: 6,
        amount: 8650000,
        detailType: "이지스밸류리츠",
        assetType: "부동산"
      }
    ]
  }
}
 : JSON.parse(sessionStorage.getItem('userAssetList'))

};

const mutations = {
  startSpinner(state){
      state.loadingStatus = true;
      console.log('스피너시작')
    },
    endSpinner(state){
        state.loadingStatus = false;
        console.log('스피너끝')
    },
    setUserInfo(state,newValue) { 
        state.userInfo = newValue;
        sessionStorage.setItem('userInfo', JSON.stringify(newValue))
    },
    setRecommendPortfolioInfo(state,newValue) { 
        state.recommendPortfolioInfo = newValue;
        sessionStorage.setItem('recommendPortfolioInfo', JSON.stringify(newValue))
    },
    setSharePortfolioInfo(state,portData) { 
        state.agePortfolioList = portData.age;
        sessionStorage.setItem('agePortfolioList', JSON.stringify(portData.age))

        state.assetPortfolioList = portData.asset;
        sessionStorage.setItem('assetPortfolioList', JSON.stringify(portData.asset))

        state.investPortfolioList = portData.invest;
        sessionStorage.setItem('investPortfolioList', JSON.stringify(portData.invest))
    },
    setUserAssetInfo(state,newValue) { 
        state.userAssetList = newValue;
        sessionStorage.setItem('userAssetList', JSON.stringify(newValue))
    },
}

const actions = {
    async LOGIN({ commit }) {
        const response = await fetchUserInfo(state.userInfo.userId);
        commit('setUserInfo', response.data)
        return response
    },
    async fetchRecommendPortfolioInfo({commit}) {
        const response = await fetchPortfolio(state.userInfo.userId);

        commit('setRecommendPortfolioInfo', response.data)
        
        return response
    },
    async fetchSharePortfolioInfo({commit}) {
        const age = await shareAgePortfolio(state.userInfo.age);
        const asset = await shareAssetPortfolio(state.userAssetList.totAmount);

        const invest = await shareInvestPortfolio(state.recommendPortfolioInfo.investType);
        const response = {
            age:age.data.portfolios,
            asset:asset.data.portfolios,
            invest:invest.data.portfolios,
        }

        commit('setSharePortfolioInfo', response)
        
        return response
    },
    async fetchUserAssetInfo({commit}) {
        const response = await fetchUserAsset(state.userInfo.userId);

        commit('setUserAssetInfo', response.data)
        
        return response
    },


};

const getters = {
    
    // fetchedUserInfo(state) {
    //     return state.userInfo
    // },
}

export default {
    state,
    mutations,
    getters,
    actions
}
