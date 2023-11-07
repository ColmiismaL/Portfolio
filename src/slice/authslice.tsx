import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

export interface DataState {
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  globalname: string;
  globalmail: string;
  isProject1: boolean;
  isProject2: boolean;
  isProject3: boolean;
  activeProject: number | null;
  isMagnifierClicked: boolean;
  searchData: {
    movieNm: string;
    movieId: string;
    genre: string;
    posterUrl: string;
  }[];
  query: string;
}

const initialState: DataState = {
  status: 'idle',
  globalname: '비로그인',
  globalmail: 'none@nope.com',
  isProject1: false,
  isProject2: false,
  isProject3: false,
  activeProject: null,
  isMagnifierClicked: false,
  query: '',
  searchData: [
    { movieNm: '1번영화', movieId: '1', genre: '액션', posterUrl: '' },
    { movieNm: '2번영화', movieId: '2', genre: '액션', posterUrl: '' },
    { movieNm: '3번영화', movieId: '3', genre: '액션', posterUrl: '' },
    { movieNm: '4번영화', movieId: '4', genre: '액션', posterUrl: '' },
    { movieNm: '5번영화', movieId: '5', genre: '액션', posterUrl: '' },
    { movieNm: '6번영화', movieId: '6', genre: '액션', posterUrl: '' },
    { movieNm: '7번영화', movieId: '7', genre: '액션', posterUrl: '' },
    { movieNm: '8번영화', movieId: '8', genre: '액션', posterUrl: '' },
  ],
};

export const DataState = createSlice({
  name: 'data',
  initialState: initialState,
  reducers: {
    updateName: (state, action: PayloadAction<string>) => {
      state.globalname = action.payload;
    },
    updateMail: (state, action: PayloadAction<string>) => {
      state.globalmail = action.payload;
    },
    updateQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
    updateActiveProject: (state, action: PayloadAction<number | null>) => {
      state.activeProject = action.payload;
    },
    updateProject1: (state, action: PayloadAction<boolean>) => {
      state.isProject1 = action.payload;
    },
    updateProject2: (state, action: PayloadAction<boolean>) => {
      state.isProject2 = action.payload;
    },
    updateProject3: (state, action: PayloadAction<boolean>) => {
      state.isProject3 = action.payload;
    },
    updateMagnifier: (state, action: PayloadAction<boolean>) => {
      state.isMagnifierClicked = action.payload;
    },
    updateSearchData: (
      state,
      action: PayloadAction<
        { movieNm: string; movieId: string; genre: string; posterUrl: string }[]
      >,
    ) => {
      state.searchData = action.payload;
    },
  },
});

export const {
  updateName,
  updateMail,
  updateActiveProject,
  updateProject1,
  updateProject2,
  updateProject3,
  updateMagnifier,
  updateQuery,
  updateSearchData,
} = DataState.actions;

export default DataState.reducer;

// import { useDispatch, useSelector } from 'react-redux';
// import { updateName } from '../slice/authslice';
// const dispatch = useDispatch();
// const globalName = useSelector((state) => state.data.name); 업데이트네임 사용예

// -----------------------------------------
// const [isNameEditing, setIsNameEditing] = useState<boolean>(false);
// onChange={(e) => dispatch(updateName(e.target.value))} 업데이트 네임 수정하려면 dispatch 사용
// onBlur={() => setIsNameEditing(false)}
