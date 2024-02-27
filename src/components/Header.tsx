import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store";
import { LOG_OUT } from "../store/reducers/auth.reducer";

function Header() {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  const dispatch = useAppDispatch();

  const handleClickLogOut = () => {
    // isLoggedIn 상태를 false로 만들어주는 액션을 디스패치
    const action = { type: LOG_OUT };
    dispatch(action);
  };

  return (
    <header style={{ borderBottom: "1px solid black" }}>
      <Link to="/">띨띨</Link>
      <nav>
        <ul>
          <li>
            <Link to="/tils/write">띨 작성하기</Link>
          </li>
          <li>
            <Link to="/">트렌딩</Link>
          </li>
        </ul>
      </nav>

      <div>
        {isLoggedIn ? (
          <button onClick={handleClickLogOut}>로그아웃</button>
        ) : (
          <>
            <Link to="/auth/log-in">로그인</Link>
            <Link to="/auth/sign-up">회원가입</Link>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
