import * as types from '../../constants/actionTypes';
import initialState from '../../reducers/initialState';

export default function categoriesReducer(state = initialState.categories, action) {
    console.log('REDUCER',state);

    switch (action.type){

        case types.OPEN_ADD_CATEGORY_MODAL_CONTAINER:
            return{
                ...state,
                addCategoriesModal : {
                    isShowModal: true,
                }
            };
        case types.CLOSE_ADD_CATEGORY_MODAL_CONTAINER:
            return{
                ...state,
                addCategoriesModal : {
                    isShowModal:false,
                }
            };
        case types.BEGIN_LOAD_CATEGORIES_DATA:
            return{
                ...state,
                ...{
                    isLoading : true,
                    error : false,
                }
            };
        case types.LOADED_CATEGORIES_DATA_SUCCESS:
            return{
                ...state,
                ...{
                    isLoading: false,
                    error: false,
                    categoriesList : action.categoriesList,
                }
            };
        case types.LOADED_CATEGORIES_DATA_ERROR:
            return{
                ...state,
                ...{
                    isLoading : false,
                    error : true,
                }
            };
        default :
            return state;
    }

}


