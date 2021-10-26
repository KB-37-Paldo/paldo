// import { loginUser, 
//     updateMyInfo } from '@/api/user.js'

import { fetchPortfolio, fetchUserAsset, fetchUserInfo, shareAgePortfolio, shareAssetPortfolio, shareInvestPortfolio } from '../../api/portfolio';


const state = {
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
        bondAmount: 0,
        cashAmount: 0,
        createAt: "2021-10-25",
        fundAmount: 0,
        goldAmount: 0,
        investType: "안정형",
        links: {
            empty: true
        },
        portfolioId: 0,
        realEstateAmount: 0,
        stockAmount: 0,
        targetPeriod: "2021-10-25",
        targetPrice: 0,
        userId: 0
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
    }
  ]:JSON.parse(sessionStorage.getItem('agePortfolioList')),
  assetPortfolioList : sessionStorage.getItem('assetPortfolioList') === null ? [
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
      cashAmount: 50,
      stockAmount: 20,
      goldAmount: 10,
      bondAmount: 10,
      fundAmount: 5,
      realEstateAmount: 5
    }
  ]:JSON.parse(sessionStorage.getItem('investPortfolioList')),
  userAssetList : sessionStorage.getItem('userAssetList') ? {
  targetPrice: 100000000,
  targetDate: "2021-10-30",
   totAmount: 487000000,
  cash: {
      totAmount: 70652100,
      data: [
    {
      holdingsId: 0,
      amount: 36852100,
      detailType: "KB종합통장",
      assetType: "현금성"
    }
  ]},
  stock: {
      totAmount: 70652100,
      data:[
    {
      holdingsId: 4,
      amount: 45627153,
      detailType: "삼성전자",
      assetType: "주식"
    }
  ]},
  realAssets : {
      totAmount: 70652100,
      data:[
    {
      holdingsId: 4,
      amount: 45627153,
      detailType: "금",
      assetType: "실물자산"
    }
  ]},
  bond: {
      totAmount: 70652100,
      data:[
    {
      holdingsId: 4,
      amount: 45627153,
      detailType: "채권",
      assetType: "채권"
    }
  ]},
  fund: {
      totAmount: 70652100,
      data:[
    {
      holdingsId: 7,
      amount: 8764514,
      detailType: "마이다스거북이90증권자투자신탁 1(주식)A",
      assetType: "펀드"
    }
  ]},
  realEstate: {
      totAmount: 70652100,
      data:[
    {
      holdingsId: 6,
      amount: 487000000,
      detailType: "와르르맨션",
      assetType: "부동산"
    }
  ]}
}
 : JSON.parse(sessionStorage.getItem('userAssetList'))

};

const mutations = {
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
        const asset = await shareAssetPortfolio(state.userInfo.salary);
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
