// import { loginUser, 
//     updateMyInfo } from '@/api/user.js'

import { fetchUserInfo } from '../../api/portfolio';


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
    }

};

const mutations = {
    setUserInfo(state,newValue) { 
        state.userInfo = newValue;
    },
    setPortStatus(state,newValue){
        // console.log('포폴유무 업데이트 전',state.isPort, newValue)
        state.userInfo.portfolio = newValue;
        // console.log('포폴유무 업데이트 후',state.isPort)
    }
}

const actions = {
    async LOGIN({ commit }) {
        const response = await fetchUserInfo(state.userInfo.userId);

        commit('setUserInfo', response.data)
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
