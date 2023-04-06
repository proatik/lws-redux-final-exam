/***
 * Title : Toast notification.
 * Author : Atik Ullah Khan.
 * Description : Show toast notification on succes or error.
 * Date : 31/03/2023.
 ***/

import toast from "react-hot-toast";

const options = {
  id: "toast",
};

const notify = {
  success(message) {
    toast.success(message, options);
  },

  error(message) {
    toast.error(message, options);
  },
};

export default notify;
