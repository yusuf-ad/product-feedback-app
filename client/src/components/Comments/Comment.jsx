import { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";

import LoadingSpinner from "../../components/UI/LoadingSpinner/LoadingSpinner";
import BASE_URL from "../../utils/BASE_URL";

export function Comment({ comment }) {
  const [replies, setReplies] = useState([]);

  useEffect(() => {
    async function getReplies() {
      const res = await fetch(`${BASE_URL}/replies/${comment._id}`);
      const { data } = await res.json();

      console.log(data);
      setReplies(data.replies);
    }

    getReplies();
  }, [comment._id]);

  return (
    <div className="mt-8 pb-8 pt-3 border-b last:border-0 flex gap-4 flex-col  ">
      <User user={comment} commentId={comment._id} />

      <div className="relative w-full self-end mt-12 pl-12 flex flex-col gap-8   ">
        <div className="-top-14 left-6 h-[100%]  w-[1px] bg-gray-300/80 absolute"></div>
        {replies.map((userReply) => (
          <User key={userReply._id} user={userReply} commentId={comment._id} />
        ))}
      </div>
    </div>
  );
}

function User({ user, commentId }) {
  const [reply, setReply] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  async function createReply() {
    try {
      const res = await fetch(`${BASE_URL}/replies/${commentId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: faker.person.fullName(),
          username: undefined,
          comment: reply,
          userImg: faker.image.avatar(),
        }),
      });
      const { data } = await res.json();

      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }

  function handleReply() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="flex items-center gap-6 last:mb-8">
        <div className="w-14 h-14 flex-shrink-0 self-start">
          <img className="rounded-full" src={user.userImg} alt="user" />
        </div>
        <div className="w-full">
          <header className="flex justify-between gap-4">
            <div>
              <h3 className="text-lg">{user.fullName}</h3>
              <p className="text-gray-600">@{user.username}</p>
            </div>
            <button
              onClick={handleReply}
              className="font-bold text-blue-default hover:underline duration-300"
            >
              Reply
            </button>
          </header>
          <p className="text-grey-darkest mt-6">{user.comment}</p>
        </div>
      </div>

      {isOpen && (
        <ReplyPost
          reply={reply}
          setReply={setReply}
          createReply={createReply}
        />
      )}
    </>
  );
}

function ReplyPost({ reply, setReply, createReply }) {
  return (
    <div className="w-[calc(100%-76px)] self-end flex items-start">
      <textarea
        value={reply}
        onChange={(e) => setReply(e.target.value)}
        className={`shadow-sm basis-[80%] bg-grey-light h-32 px-6 py-4 rounded-md w-full resize-none`}
        name="feedback-detail"
        id="detail"
        maxLength={255}
      ></textarea>
      <button
        onClick={() => {
          console.log(reply);
          createReply();
          setReply("");
        }}
        className="btn ml-auto bg-purple-default hover:bg-purple-hover"
      >
        Post Reply
      </button>
    </div>
  );
}
