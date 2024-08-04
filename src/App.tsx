import { useState } from "react";
import "./App.css";
function App() {
  // const [count, setCount] = useState(0);
  // const [profile, setProfile] = useState({
  //   name: "Kiệt",
  //   age: 21,
  //   favourite: ["Play game", "Watch Youtube"],
  //   address: "Bình Dương",
  // });
  // const cong = () => {
  //   setCount((pre) => pre + 1);
  // };
  // const [field, setField] = useState("");
  // const [value, setValue] = useState("");
  // const updateProfile = (fieldF: string, valueF: string) => {
  //   setProfile((pre) => ({
  //     ...pre,
  //     [fieldF]: valueF,
  //   }));
  // };

  // const gifts = ["Oto", "Xe máy", "1 đêm với Quốc Trung", "Iphone 15"];
  // const [gift, setGift] = useState("Chưa có phần thưởng");
  // const getGift = () => {
  //   const random = Math.floor(Math.random() * gifts.length);
  //   setGift(gifts[random]);
  // };
  const courses = [
    {
      id: 1,
      name: "Kiệt",
    },
    {
      id: 2,
      name: "Trung",
    },
    {
      id: 3,
      name: "Huyền",
    },
  ];
  const [checked, setCheck] = useState<number[]>([]);
  const handleCheck = (id: number) => {
    setCheck(pre => {
      const isChecked = checked.includes(id);
      if (isChecked) {
        return checked.filter((item) => item != id);
      } else {
        return [...pre, id];
      }
    })
  };
  console.log(checked);
  return (
    <>
      <div>
        {/* <div>
          <p className=' text-[30px] font-bold'>{count}</p>
          <button onClick={cong}>Cộng</button>
        </div>
        <div>
          <div>
            {JSON.stringify(profile)}
          </div>
          <input onChange={(e)=>{setField(e.target.value)}} value={field} placeholder='field' />
          <input onChange={(e)=>{setValue(e.target.value)}} value={value} placeholder='value'/>
          <button onClick={()=>{updateProfile(field,value)}}>Update Profile</button>
        </div> */}

        {/* <p>{gift}</p>
        <button onClick={getGift}>Lấy thưởng</button> */}
        {courses.map((course) => (
          <div key={course.id}>
            <input
              type="checkbox"
              checked={checked.includes(course.id)}
              onChange={() => {
                handleCheck(course.id);
              }}
            />
            {course.name}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
