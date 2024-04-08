import { createContext, useEffect, useState } from "react";
import useWindowSize from "../hooks/useWindowSize";
import { roadMapData } from "../Data"
import api from '../api/Api'
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const DataContext = createContext({});


export const DataProvider = ({ children }) => {

    const navigate = useNavigate();
    // header
    const [head, setHead] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const { width } = useWindowSize();
    const [day, setDay] = useState(0);
    const [data, setData] = useState(roadMapData[0]);
    const [flag, setFlag] = useState(true);

    const [frontEndCode, setFrontEndCode] = useState("");
    const [frontEndURL, setFrontEndURL] = useState("");
    const [backEndCode, setBackEndCode] = useState("");
    const [backEndURL, setBackEndURL] = useState("");
    const [DBTask, setDBTask] = useState([]);

    const [trigger, setTrigger] = useState(0);
    const [portfolio, setPortfolio] = useState(null);
    const [webCode, setWebcode] = useState(null);
    const [capStone, setCapStone] = useState(null);
    const [query, setQuery] = useState([]);

    const [leave, setLeave] = useState([]);

    const [loggedUser, setLoggedUser] = useState("");
    const [resetToken, setResetToken] = useState("");
    const [token, setToken] = useState("");
    const [config, setConfig] = useState({
        headers: {
            authorization: `Bearer ${token}`,
        },
    })
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        const loggedInUserJson = localStorage.getItem("loggedInUser");
        if (loggedInUserJson) {
            const user = JSON.parse(loggedInUserJson);
            setLoggedUser(user.student);
            setToken(user.token)
            setConfig({
                headers: {
                    authorization: `Bearer ${user.token}`,
                },
            })
        }
        api.get("/")
            .then((res) =>
                console.log(res.data)
            ).catch((error) =>
                console.log(error))
    }, []);

    //signup api
    const handleSignUp = async (data) => {

        setIsLoading(true);

        try {
            const response = await api.post("/student/signup", data);
            toast.success(response.data.message);
            // toast("Check your Mail & Activate");
            setIsLoading(false);
            navigate("/");

        } catch (error) {
            if (error.response.data.message) {
                toast.error(error.response.data.message)
            } else {
                console.log(error);
            }
            setIsLoading(false);
        }
    };
    //confirm user activate
    const handleConfirm = (e) => {

        setIsLoading(true);

        e.preventDefault();
        try {
            api.patch(`/student/confirm/${resetToken}`);
            toast.success("Account verification Successfull");
            setIsLoading(false);
            navigate("/");
        } catch (error) {
            if (error.response.data.message) {
                toast.error(error.response.data.message)
            } else {
                console.log(error);
            }
            setIsLoading(false);
        }
    };

    //signin api
    const handleSignIn = async (data) => {
        try {
            setIsLoading(true);

            const response = await api.post("/student/login", data);

            if (response) {
                // Save user data and token in local storage
                localStorage.setItem("loggedInUser", JSON.stringify(response.data));
                toast.success(response.data.message);
                // Set user information and authentication token in state
                setLoggedUser(response.data.student);
                setToken(response.data.token);

                // Configure headers for API requests with the authentication token
                setConfig({
                    headers: {
                        authorization: `Bearer ${response.data.token}`,
                    },
                });


                setIsLoading(false);

            }
            navigate("/class")



        } catch (error) {
            setIsLoading(false);

            // Handle errors
            if (error.response) {
                // If the error has a response, it means it's an API error
                toast.error(error.response.data.message);
            } else {
                // If there's no response, log the error for debugging
                console.error(error);
            }
        }
    };

    //forgot password api
    const handleForgot = async (data) => {

        setIsLoading(true);

        try {
            await api.put("/student/forgot", data);
            toast("Reset link send to your mail");
            setIsLoading(false);
            navigate("/");
        } catch (error) {
            if (error.response.data.message) {
                toast.error(error.response.data.message)
            } else {
                console.log(error);
            }
            setIsLoading(false);
        }
    };
    //reset password update
    const handleReset = async (data) => {

        setIsLoading(true);

        try {
            const response = await api.patch(`/student/reset/${resetToken}`, data);
            setResetToken("");
            toast.success(response.data.message);
            setIsLoading(false);
            navigate("/");

        } catch (error) {
            if (error.response.data.message) {
                toast.error(error.response.data.message)
            } else {
                console.log(error);
            }
            setIsLoading(false);
        }
    };

    const handleLogout = () => {
        setToken(null);
        setLoggedUser(null);
        setHead("Class")
        navigate("/");
        localStorage.clear();
    };

    const handleProfileUpdate = async (data) => {

        setIsLoading(true);

        try {
            const response = await api.put("/student/update", data);
            const student = response.data.matchedStudent;
            const updatedData = { token, student };
            localStorage.setItem("loggedInUser", JSON.stringify(updatedData));
            setLoggedUser(updatedData.student);
            toast.success(response.data.message);
            setIsLoading(false);
            navigate("/class");

        } catch (error) {
            if (error.response.data.message) {
                toast(error.response.data.message)
            } else {
                console.log(error);
            }
            setIsLoading(false);
        }

    };
    //router by profile view
    const handleHead = (data) => {
        setHead(data);
        setToggle(false);
        localStorage.setItem("head", data);
    }

    //task sumbit api

    const handleTask = async (e) => {

        e.preventDefault();

        setIsLoading(true)

        const config = {
            headers: {
                authorization: `Bearer ${token}`,
            },
        };
        let check = loggedUser.email ? loggedUser.email : loggedUser.student.email;
        check = check + day;
        const newTask = {
            day,
            frontEndCode,
            frontEndURL,
            backEndCode,
            backEndURL,
            task: data.task,
            title: data.title,
            check,
        };

        try {
            const response = await api.post("/student/task", newTask, config);
            toast.success(response.data.message);
            setBackEndCode("");
            setBackEndURL("");
            setFrontEndCode("");
            setFrontEndURL("");
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            if (error.response) {
                // If the error has a response, it means it's an API error
                toast.error(error.response.data.message);
            } else {
                // If there's no response, log the error for debugging
                console.log(error);
            }

        }
    }

    //fetch all task api
    const fetchAllTask = async () => {
        try {
            const fetchedTask = await api.get("/student/alltask", config);
            if (fetchedTask) {
                setDBTask(fetchedTask.data.filter((item) => item.score === "Yet to be graded"));
            }
        } catch (error) {
            console.log(error);
        }
    }
    //sumbit webcode api and fetch data api
    const handleWebcode = async (data) => {

        setIsLoading(true);

        try {
            const response = await api.post("student/webcode", data, config);
            toast.success(response.data.message);
            setTrigger((prev) => prev + 1);
            setIsLoading(false);
        } catch (error) {
            if (error.response.data.message) {
                toast.error(error.response.data.message)
            } else {
                console.log(error);
            }
            // setIsLoading(false);
        }
    }
    //webcode fetch data api
    const fetchWebcode = async () => {
        try {
            const fetchedWebcode = await api.get("/student/getwebcode", config);
            if (fetchedWebcode) {
                setWebcode(fetchedWebcode.data[0]);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleCapStone = async (data) => {

        setIsLoading(true);

        try {
            const response = await api.post("/student/capstone", data, config);
            toast.success(response.data.message);
            setTrigger((prev) => prev + 1);
            setIsLoading(false);
        } catch (error) {
            if (error.response.data.message) {
                toast.error(error.response.data.message)
            } else {
                console.log(error);
            }
            setIsLoading(false);
        }
    }

    // fetching capstone
    const fetchCapStone = async () => {
        try {
            const fetcheCapStone = await api.get("/student/capstone", config);
            if (fetcheCapStone) {
                setCapStone(fetcheCapStone.data[0]);
            }
        } catch (error) {
            console.log(error);
        }
    }

    // handling query request
    const handleAddQuery = async (data) => {

        setIsLoading(true);

        try {
            const response = await api.post("/student/query", data, config);
            setTrigger((prev) => prev + 1);
            setIsLoading(false);
            toast.success(response.data.message);
        } catch (error) {
            if (error.response.data.message) {
                toast.error(error.response.data.message)
            } else {
                console.log(error);
            }
            setIsLoading(false);
        }
    }




    // fetching queries
    const fetchQuery = async () => {
        try {
            const fetchedQuery = await api.get("/student/query", config);
            if (fetchedQuery) {
                setQuery(fetchedQuery.data);
            }
        } catch (error) {
            console.log(error);
        }
    }
    //delete query
    //handling query request
    const handleQueryCancel = async (data) => {
        try {
            const response = await api.delete(`student/query/${data}`, config);
            toast.success(response.data.message);
            setTrigger((prev) => prev + 1);
        } catch (error) {
            if (error.response.data.message) {
                toast.error(error.response.data.message)
            } else {
                console.log(error);
            }
        }
    }









    //POST PORTFOLIO
    const handlePortfolio = async (data) => {

        setIsLoading(true);

        try {
            const response = await api.post("/student/portfolio", data, config);
            toast.success(response.data.message);
            setTrigger((prev) => prev + 1);
            setIsLoading(false);
        } catch (error) {
            if (error.response.data.message) {
                toast.error(error.response.data.message)
            } else {
                console.log(error);
            }
            setIsLoading(false);
        }
    }

    //fetching portfolio data
    const fetchPortfolio = async () => {
        try {
            const fetchedPortfolio = await api.get("/student/portfolio", config);
            if (fetchedPortfolio) {
                setPortfolio(fetchedPortfolio.data[0]);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const fetchTask = async () => {
        try {
            const fetchedTask = await api.get("student/task", config);
            if (fetchedTask) {
                setDBTask(fetchedTask.data);
            }
        } catch (error) {
            console.log(error);
        }
    }
    //apply leave
    const handleAddLeave = async (data) => {

        setIsLoading(true);

        try {
            const response = await api.post("student/leave", data, config);
            setIsLoading(false);
            toast.success(response.data.message);
            setTrigger((prev) => prev + 1);
        } catch (error) {
            if (error.response.data.message) {
                toast.error(error.response.data.message)
            } else {
                console.log(error);
            }
            setIsLoading(false);
        }
    }

    // handling leave canceling
    const handleLeaveCancel = async (data) => {
        try {
            const response = await api.delete(`student/leave/${data}`, config);
            toast.success(response.data.message);
            setTrigger((prev) => prev + 1);
        } catch (error) {
            if (error.response.data.message) {
                toast.error(error.response.data.message)
            } else {
                console.log(error);
            }
        }
    }

    // fetching leave data
    const fetchLeave = async () => {
        try {
            const fetchedLeave = await api.get("student/leave", config);
            if (fetchedLeave) {
                setLeave(fetchedLeave.data);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <DataContext.Provider
            value={{
                width,
                head, setHead,
                isLoading, setIsLoading,
                day, setDay,
                data, setData,
                flag, setFlag,
                frontEndCode, setFrontEndCode,
                frontEndURL, setFrontEndURL,
                backEndCode, setBackEndCode,
                backEndURL, setBackEndURL,
                trigger, setTrigger,
                portfolio,
                capStone, setCapStone,
                webCode, setWebcode,
                query,
                leave,
                loggedUser, setLoggedUser,
                resetToken, setResetToken,
                DBTask,
                //functions are passing data
                handleSignUp,
                handleConfirm,
                handleSignIn,
                handleForgot,
                handleReset,
                handleLogout,
                handleProfileUpdate,
                handleHead,
                handleTask,
                fetchAllTask,
                handleWebcode,
                fetchWebcode,
                handleCapStone,
                fetchCapStone,
                fetchQuery,
                handleAddQuery,
                fetchPortfolio,
                handlePortfolio, fetchTask,
                handleAddLeave, handleLeaveCancel, fetchLeave,
                handleQueryCancel
               
                














            }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;