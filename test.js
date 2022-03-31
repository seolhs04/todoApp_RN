import axios from "axios";
import { useQuery } from "react-query";

// 서울특별시 성북구의 등록인구수에 대한 데이터입니다.
// 연도별 총 인구수 및 남녀 인구수, 세대수 등의 항목을 제공합니다.
// page=1, perPage=10
const TEST_URL = "https://api.github.com/repos/tannerlinsley/react-query";

export const testAxiosFunc = () => {
  return axios(TEST_URL, {
    method: "GET",
  })
    .then((res) => res)
    .catch((err) => console.log(err));
};

export const testQueryFunc = useQuery("아몰랑", testAxiosFunc);
