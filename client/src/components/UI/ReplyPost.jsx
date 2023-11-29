export function ReplyPost({ reply, setReply, createReply }) {
  return (
    <div className="w-[calc(100%-76px)] mt-2 self-end flex items-start">
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
