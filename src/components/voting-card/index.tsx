import React from 'react'
import { useDispatch } from 'react-redux';
import { addVote } from '../../actions/player';

interface VotingCardProps {
    value: string;
}

export const VotingCard = (props: VotingCardProps) => {
    const dispatch = useDispatch();

    const onCastVote = () => {
        dispatch(addVote(props.value));
    };

    return (
        <div className="text-center py-4">
            <div
                onClick={onCastVote}
                className="w-10 h-20 border-2 rounded-md border-tbpp-purple flex flex-col cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:bg-gray-200">
                <p className="text-xl text-blue-700 font-bold m-auto">
                    {props.value}
                </p>
            </div>
        </div>
    )
}
