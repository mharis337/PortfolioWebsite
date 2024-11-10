import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isContactFormOpen, setIsContactFormOpen] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        emailjs.init('DQcQ2BYjC6n4K-wTP');
    }, []);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const toggleContactForm = () => {
        setIsContactFormOpen(!isContactFormOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.send(
            'service_lk21spq', 
            'template_c899m7j',
            { name, email, message },
            'DQcQ2BYjC6n4K-wTP'
        )
        .then((result) => {
            setEmail('');
            setMessage('');
            setName('');
            toggleContactForm();
            setShowConfirmation(true);
        })
        .catch((error) => {
            console.error('Email sending error:', error);
            alert('Failed to send message. Please try again later.');
        });
    };

    const closeConfirmation = () => {
        setShowConfirmation(false);
    };

    return (
        <div>
            <nav className={`fixed w-full py-4 transition-colors duration-300 z-30 ${isScrolled ? 'bg-[#ccd5ae] shadow-md' : 'bg-transparent'}`}>
                <div className="container mx-auto flex items-center justify-between px-16">
                    <div className="p-2 border-4 border-black rounded cursor-pointer" onClick={toggleSidebar}>
                        <span className="font-extrabold text-2xl">MH</span>
                    </div>

                    <div className="hidden md:flex space-x-8">
                        {['Home', 'Projects', 'Experience', 'Skills', 'Education'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-black font-extrabold text-xl hover:text-green-500 relative"
                            >
                                <span className="relative z-10">{item}</span>
                                <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-[110%] h-[4px]" style={{ backgroundColor: '#d4a373' }}></span>
                            </a>
                        ))}
                    </div>

                    <div className="hidden md:block">
                        <button onClick={toggleContactForm} className="px-4 py-2 border-4 border-black rounded font-extrabold text-black text-xl hover:bg-gray-100 transition-colors">
                            Contact Me
                        </button>
                    </div>
                </div>
            </nav>

            {isContactFormOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded shadow-lg max-w-md w-full">
                        <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
                        <form onSubmit={sendEmail}>
                            <div className="mb-4">
                                <label className="block text-lg font-bold mb-2">Name</label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-lg font-bold mb-2">Email</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-lg font-bold mb-2">Message</label>
                                <textarea
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded"
                                    rows="4"
                                    required
                                />
                            </div>
                            <div className="flex justify-between">
                                <button
                                    type="button"
                                    onClick={toggleContactForm}
                                    className="px-4 py-2 bg-gray-200 rounded"
                                >
                                    Cancel
                                </button>
                                <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded">
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {showConfirmation && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded shadow-lg max-w-md w-full">
                        <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
                        <p>Your message has been sent successfully.</p>
                        <div className="flex justify-center mt-4">
                            <button onClick={closeConfirmation} className="px-4 py-2 bg-green-500 text-white rounded">
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <div
                className={`fixed top-0 left-0 h-full w-64 z-30 transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
                style={{ backgroundColor: '#ccd5ae' }}
            >
                <div className="h-full pt-5 px-3 pb-4 overflow-y-auto">
                    <div className="flex items-center justify-between px-2 pb-4 border-b border-gray-300 mb-4">
                        <div className="border-4 border-black p-2 rounded">
                            <span className="font-extrabold text-2xl text-black">MH</span>
                        </div>
                        <button onClick={toggleSidebar} className="text-black text-2xl font-bold">
                            &times;
                        </button>
                    </div>

                    <ul className="space-y-2 font-bold">
                        {['Home', 'Projects', 'Experience', 'Skills', 'Education'].map((item) => (
                            <li key={item}>
                                <a
                                    href={`#${item.toLowerCase()}`}
                                    className="flex items-center text-2xl text-black rounded-lg hover:bg-gray-100"
                                    onClick={toggleSidebar}
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
