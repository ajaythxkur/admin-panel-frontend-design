import toast, { Toaster } from "react-hot-toast";
const duration = 3000;
function normal(msg = "awesome!") {
  toast(msg, { duration });
}

function success(msg = "awesome!") {
  toast.success(msg, { duration });
}

function error(msg = "awesome!") {
  toast.error(msg, { duration });
}

function promise(promise, { loading, success, error }) {
  toast.promise(promise, {
    loading,
    success,
    error,
  });
}

function icon(icon, msg) {
  toast(msg, { icon: icon, duration });
}
export { Toaster };
export default {
  normal,
  success,
  error,
  promise,
  icon,
};

//👏
