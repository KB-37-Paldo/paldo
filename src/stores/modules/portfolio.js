// import { loginUser, 
//     updateMyInfo } from '@/api/user.js'

import { fetchPortfolio, fetchUserInfo } from '../../api/portfolio';


const state = {
    userInfo : {
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
    },
    portfolioInfo : {
        bondAmount: 0,
        cashAmount: 0,
        createAt: "2021-10-25",
        fundAmount: 0,
        goldAmount: 0,
        investType: "string",
        links: {
            empty: true
        },
        portfolioId: 0,
        realEstateAmount: 0,
        stockAmount: 0,
        targetPeriod: "2021-10-25",
        targetPrice: 0,
        userId: state.userInfo.userId
        }

};

const mutations = {
    setUserInfo(state,newValue) { 
        state.userInfo = newValue;
    },
    setPortfolioInfo(state,newValue) { 
        state.portfolioInfo = newValue;
    }
}

const actions = {
    async LOGIN({ commit }) {
        const response = await fetchUserInfo(state.userInfo.userId);

        commit('setUserInfo', response.data)
        return response
    },
    async fetchPortfolioInfo({commit}) {
        const response = await fetchPortfolio(state.userInfo.userId);

        commit('setUserInfo', response.data)
        return response
    }


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
