import React from 'react'
import ChatBot from '../components/chatbot/Index'
import { Navbar } from '../components'

const chatbot = () => {
    return (
        <div className="h-screen">
            <Navbar />
            <div className="mt-5">

            <ChatBot />
            </div>
        </div>
    )
}

export default chatbot
