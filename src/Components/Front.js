import React, { useEffect, useState } from 'react'
import axios from 'axios'
import LoadingIndicator from '../loading/loading.gif'
import moment from 'moment'

const BASE_URL = "https://my-json-server.typicode.com/m4yankchoudhary/demo/blogs"

const Front = () => {
    const [blogs, setBlogs] = useState()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(true)
    useEffect(() => {
        // makeAPICall()

    }, [])
    const func1=()=>{
        setLoading(true)
        setError(false)
        makeAPICall()
    }
    async function makeAPICall(){
        await axios.get(BASE_URL).then((response) => {
            console.log(response)
            setError(false)
            setBlogs(response.data);
            setLoading(false)
        }).catch((e) => {
            setError(true)
            console.log(e)
        });
    }



    if (error) {
        return <div><h1>error</h1><button onClick={()=>func1()}>retry</button></div>
    }




    return (
        <>
            <div className='main-container'>
                {loading ? <div className="img-loading"> <img src={LoadingIndicator} /> </div> :
                    <><div className='topContainer'>
                        <div className='box-container'>
                            <div className='header-text'>
                                <div className='header-css'><p>CSS</p></div>
                                <div className='header-see'><p>See All article<img src="/images/imgf.png" alt="" /></p></div>
                            </div>
                            <div className='cards-container' >
                                {
                                    blogs.map((blog, key) => {
                                        return(
                                            <div key={key} className='cards'>
                                            <img className="image-cards" src={blog.image} alt="Hello" />
                                            <p className='cards-text'>{blog.title}</p>
                                            <div className='cards-image-text'>
                                                <div className='img-div'><img src="/images/User.png" alt="" /></div>
                                                <div className='text-div'>
                                                    <p className='name'>{blog.name}</p>
                                                    <p className='date'>{moment(blog.date).format('MMM D ,YYYY')} </p>
                                                </div>
                                            </div>
                                        </div>
                                        )
                                       

                                    })
                                }




                            </div>


                        </div>
                    </div>
                        <div className='bottom-container'>
                            <div className='bottom-container-div'>
                                <div className='bottom-container-img'>
                                    <img src="/images/image2.png" alt="" />
                                </div>
                                <div className='bottom-container-text'>
                                    <p className='bottom-container-text-p1'>Subscribe For the lastest updates</p>
                                    <p className='bottom-container-text-p2'>Subscribe to newsletter and never miss the new post every week.</p>

                                </div>
                                <div className='bottom-container-form'>
                                    <input type="text" placeholder='      Enter your email here' />
                                    <button>Primary</button>

                                </div>

                            </div>

                        </div>
                    </>
                }
            </div>
        </>
    )
}

export default Front
