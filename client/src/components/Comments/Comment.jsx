import { useState } from "react";

export function Comment({ comment }) {
  return (
    <div className="mt-8 pb-8 pt-3 border-b last:border-0 flex gap-4 flex-col  ">
      <User user={comment} />

      <div className="relative w-full self-end mt-12 pl-12 flex flex-col gap-8   ">
        <div className="-top-14 left-6 h-[100%]  w-[1px] bg-gray-300/80 absolute"></div>
        <User user={comment} />
        <User user={comment} />
      </div>
    </div>
  );
}

function ReplyPost() {
  return (
    <div className="w-[calc(100%-76px)] self-end flex items-start">
      <textarea
        className={`shadow-sm basis-[80%] bg-grey-light h-32 px-6 py-4 rounded-md w-full resize-none`}
        name="feedback-detail"
        id="detail"
        maxLength={255}
      ></textarea>
      <button className="btn ml-auto bg-purple-default hover:bg-purple-hover">
        Post Reply
      </button>
    </div>
  );
}

function User({ user }) {
  const [isOpen, setIsOpen] = useState(false);

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

      {isOpen && <ReplyPost />}
    </>
  );
}
