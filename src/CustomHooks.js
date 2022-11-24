import { useEffect, useState } from 'react';

// این هوک کاربرد ندارد فقط برای تمرین این را اینجا گداشته ام و میتوانم از این پوشه بر دارم..
const useFetch = (url) => {
  const [data, setData] = useState(false);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);
  return data;
};

const CustomHooks = () => {
  const [showUsers, setShowUsers] = useState(false);
  const [users] = useFetch('https://placeholder.ir/users');
  return (
    <div className="mx-auto mt-5 d-grid gap-3 w-50">
      <h5 className="alert alert-danger text-center">
        آشنایی با هوک های شخصی سازی شده
      </h5>
      <hr className="bg-dark" />
      <button
        className="btn btn-block btn-success"
        onClick={() => setShowUsers((prevShowUsers) => !prevShowUsers)}
      >
        نمایش کاربران
      </button>
      {showUsers
        ? users.map((user, index) => (
            <div key={index}>
              <p className="alert alert-light">{user.name}</p>
            </div>
          ))
        : null}
    </div>
  );
};

export default CustomHooks;
