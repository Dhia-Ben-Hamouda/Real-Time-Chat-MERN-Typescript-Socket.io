import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";
import useAuth from "../hooks/useAuth";
import url from "../api/baseURL";
import present from "../assets/images/present.png";
import { MdRefresh } from "react-icons/md";
import cover from "../assets/images/cover.png";
import envelope from "../assets/images/envelope.png";
import house from "../assets/images/house.png";
import group from "../assets/images/group.png";
import album from "../assets/images/album.png";
import memories from "../assets/images/memories.png";
import save from "../assets/images/save.png";
import blog from "../assets/images/blog.png";
import Stories from "../components/home/Stories";
import Posts from "../components/home/Posts";

export default function HomePage() {
    const { user, token } = useAuth();

    return (
        <>
            <Navbar />
            <section id="home-page">
                <div className="home-container">
                    <div className="left">
                        <div className="birthday-container shadow">
                            <img src={present} alt="present-picture" />
                            <p>Dhia Ben Hamouda and 2 others have their birthday today</p>
                        </div>
                        <div className="people-you-may-know-container shadow">
                            <div className="wrapper">
                                <p>People you may know</p>
                                <MdRefresh className="icon" />
                            </div>
                            <div className="people">
                                <div className="person">
                                    <img src={`${url}/images/profile.png`} alt="user-picture" />
                                    <p>Dhia Ben Hamouda</p>
                                    <button>follow</button>
                                </div>
                                <div className="person">
                                    <img src={`${url}/images/profile.png`} alt="user-picture" />
                                    <p>Dhia Ben Hamouda</p>
                                    <button>follow</button>
                                </div>
                                <div className="person">
                                    <img src={`${url}/images/profile.png`} alt="user-picture" />
                                    <p>Dhia Ben Hamouda</p>
                                    <button>follow</button>
                                </div>
                                <div className="person">
                                    <img src={`${url}/images/profile.png`} alt="user-picture" />
                                    <p>Dhia Ben Hamouda</p>
                                    <button>follow</button>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="middle">
                        <Stories />
                        <div className="add-post-container">
                            
                        </div>
                        <Posts />
                    </div>
                    <div className="right">
                        <div className="profile-container shadow">
                            <div className="cover-container">
                                <img className="cover-picture" src={cover} alt="cover-picture" />
                                <img className="profile-picture" src={`${url}/images/${user.picture}`} alt="profile-picture" />
                            </div>
                            <div className="placeholder"></div>
                            <p className="user-name" >Dhia Ben Hamouda</p>
                        </div>
                        <div className="action-container shadow">
                            <div className="action">
                                <img src={house} alt="house-picture" />
                                <p>News Feed</p>
                            </div>
                            <div className="action">
                                <img src={group} alt="group-picture" />
                                <p>My Groups</p>
                            </div>
                            <div className="action">
                                <img src={save} alt="save-picture" />
                                <p>Saved Posts</p>
                            </div>
                            <div className="action">
                                <img src={memories} alt="memories-picture" />
                                <p>My Memories</p>
                            </div>
                            <div className="action">
                                <img src={album} alt="album-picture" />
                                <p>My Photos</p>
                            </div>
                            <div className="action">
                                <img src={blog} alt="blog-picture" />
                                <p>Liked Pages</p>
                            </div>
                        </div>
                        <div className="invitation-container shadow">
                            <img src={envelope} alt="envelope-picture" />
                            <p>Invite your friends</p>
                            <div className="input-container">
                                <input placeholder="Enter email..." />
                                <button>Send</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="chat-container shadow">

                </div>
            </section>
            <Toaster />
        </>
    )
}