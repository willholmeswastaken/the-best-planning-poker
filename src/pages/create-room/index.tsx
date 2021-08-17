import { Field, Form, Formik } from 'formik'
import React from 'react'
import { Header } from '../../components/header';

interface Props {

}

export const CreateRoomPage = (props: Props) => {
    return (
        <div>
            <Header />
            <div className="bg-grey-lighter min-h-screen flex flex-col">
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center py-28y px-2">
                    <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                        <h1 className="mb-8 text-3xl text-center">New Voting Room 🚀</h1>
                        <Formik
                            initialValues={{
                                roomName: '',
                                displayName: '',
                                isLeaderOnlyAllowedToShowCards: true
                            }}
                            onSubmit={async (values) => {
                                alert(JSON.stringify(values, null, 2));
                            }}>
                            {({ values }) => (
                                <Form>
                                    <Field
                                        type="text"
                                        className="block border border-grey-light w-full p-3 rounded mb-4"
                                        name="roomName"
                                        placeholder="Room name"
                                    />
                                    <Field
                                        type="text"
                                        className="block border border-grey-light w-full p-3 rounded mb-4"
                                        name="displayName"
                                        placeholder="Your Name"
                                    />
                                    <div className="mb-5">
                                        <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                                            <Field type="checkbox" name="isLeaderOnlyAllowedToShowCards" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" />
                                            <label htmlFor="isLeaderOnlyAllowedToShowCards" className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                                        </div>
                                        <label htmlFor="isLeaderOnlyAllowedToShowCards" className="text-xs text-gray-700">Restrict Card Revealing?</label>
                                    </div>
                                </Form>
                            )}
                        </Formik>

                        <button
                            type="submit"
                            className="w-full text-center py-3 rounded bg-tbpp-purple text-white hover:bg-green-dark focus:outline-none my-1"
                        >
                            Create Room 🚀
                        </button>

                        <div className="text-center text-sm text-grey-dark mt-4">
                            By signing up, you agree to the&nbsp;
                            <a
                                className="no-underline border-b border-grey-dark text-grey-dark"
                                href="#"
                            >
                                Terms of Service
                            </a>{" "}
                            and{" "}
                            <a
                                className="no-underline border-b border-grey-dark text-grey-dark"
                                href="#"
                            >
                                Privacy Policy
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
