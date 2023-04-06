import { useNavigate } from "react-router-dom";
import { Fragment, useState, useEffect } from "react";

// RTK query hooks.
import { useAddVideoMutation } from "../../redux/features/videos/videosAPI";

// custom hooks.
import useChangeTitle from "../../hooks/useChangeTitle";

// react components.
import Navbar from "../../components/admin/navbar/Navbar";
import FormHeading from "../../components/ui/FormHeading";
import CancelButton from "../../components/ui/CancelButton";
import AddVideoForm from "../../components/admin/videos/AddVideoForm";

// utility functions.
import notify from "../../utils/notify";

// initial form values.
const formValues = {
  title: "",
  description: "",
  url: "",
  views: "",
  duration: "",
};

const AddVideo = () => {
  const navigate = useNavigate();
  const changeTitle = useChangeTitle();

  const [values, setValues] = useState(formValues);
  const [addVideo, { isSuccess, isError: addFailed }] = useAddVideoMutation();

  // handle form values change.
  const valuesChangeHandler = (event) => {
    const { name, value } = event.target;

    setValues({ ...values, [name]: value });
  };

  // handle form submission of add-video.
  const formSubmitHandler = (event) => {
    event.preventDefault();

    values.createdAt = new Date();
    addVideo(values);
  };

  // redirect to videos page on canceled.
  const cancelHandler = () => navigate("/admin/videos");

  // redirect to videos page on succeeded.
  useEffect(() => {
    if (isSuccess) {
      navigate("/admin/videos");
      notify.success("Video added successfully");
    } else if (addFailed) notify.error("Failed to add video");
  }, [isSuccess, addFailed]);

  // set page title.
  useEffect(() => changeTitle("Admin | Add Video"), []);

  const props = {
    formSubmitHandler,
    valuesChangeHandler,
  };

  return (
    <Fragment>
      <Navbar />
      <section className="py-6 bg-primary">
        <div className="w-full px-5 mx-auto md:w-1/2 lg:px-10">
          <div className="relative px-10 py-10 rounded-lg bg-slate-800">
            <FormHeading heading={"Add Video"} />
            <AddVideoForm props={props} />
            <CancelButton cancelHandler={cancelHandler} />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default AddVideo;
