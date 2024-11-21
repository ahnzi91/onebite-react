import { useState, useRef } from "react";

const Register = () => {
  // 5.8) State로 사용자 입력 관리하기 - 1
  // const [name, setName] = useState("이름");
  // const [birth, setBirth] = useState("");
  // const [country, setCountry] = useState("");
  // const [bio, setBio] = useState("");
  // const onChangeName = (event) => {
  //   setName(event.target.value);
  // };
  // const onChangeBirth = (event) => {
  //   setBirth(event.target.value);
  // };
  // const onChangeCountry = (event) => {
  //   setCountry(event.target.value);
  // };
  // const onChangeBio = (event) => {
  //   setBio(event.target.value);
  // };
  // return (
  //   <div>
  //     <div>
  //       <input value={name} onChange={onChangeName} placeholder={"이름"} />
  //     </div>
  //     <div>
  //       <input type="date" value={birth} onChange={onChangeBirth} />
  //     </div>
  //     <div>
  //       <select value={country} onChange={onChangeCountry}>
  //         <option value=""></option>
  //         <option value="kr">한국</option>
  //         <option value="us">미국</option>
  //         <option value="uk">영국</option>
  //       </select>
  //     </div>
  //     <div>
  //       <textarea value={bio} onChange={onChangeBio} />
  //     </div>
  //   </div>
  // );

  // 5.9) State로 사용자 입력 관리하기 - 2
  // const [input, setInput] = useState({
  //   name: "",
  //   birth: "",
  //   country: "",
  //   bio: "",
  // });

  // const onChange = (event) => {
  //   setInput({
  //     ...input,
  //     [event.target.name]: event.target.value,
  //   });
  // };

  // return (
  //   <div>
  //     <div>
  //       <input name="name" value={input.name} onChange={onChange} placeholder={"이름"} />
  //     </div>
  //     <div>
  //       <input type="date" name="birth" value={input.birth} onChange={onChange} />
  //     </div>
  //     <div>
  //       <select name="country" value={input.country} onChange={onChange}>
  //         <option value=""></option>
  //         <option value="kr">한국</option>
  //         <option value="us">미국</option>
  //         <option value="uk">영국</option>
  //       </select>
  //     </div>
  //     <div>
  //       <textarea name="bio" value={input.bio} onChange={onChange} />
  //     </div>
  //   </div>
  // );

  // 5.10) useRef로 컴포넌트의 변수 생성하기
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  const countRef = useRef(0);
  const inputRef = useRef();

  let count = 0;

  const onChange = (event) => {
    // countRef.current++;
    // console.log(countRef.current);
    count++;
    console.log(count);
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = () => {
    if (input.name === "") {
      // 이름을 입력하는 DOM 요소 포커스
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <div>
        <input
          name="name"
          value={input.name}
          onChange={onChange}
          placeholder={"이름"}
          ref={inputRef}
        />
      </div>
      <div>
        <input type="date" name="birth" value={input.birth} onChange={onChange} />
      </div>
      <div>
        <select name="country" value={input.country} onChange={onChange}>
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
      </div>
      <div>
        <textarea name="bio" value={input.bio} onChange={onChange} />
      </div>

      <button onClick={onSubmit}>회원가입</button>
    </div>
  );
};

export default Register;
