export function Comment({ comment }) {
  return (
    <div className="mt-8 flex items-center gap-6 pb-8 pt-3 border-b last:border-0  ">
      <div className="w-20 h-20 self-start">
        <img className="rounded-full" src={comment.userImg} alt="user" />
      </div>

      <div className="w-full">
        <h3 className="text-lg">{comment.fullName}</h3>
        <p className="text-gray-600">@{comment.username}</p>
        <p className="text-grey-darkest mt-4">{comment.comment}</p>
      </div>

      <button className="ml-auto font-bold text-blue-default hover:underline duration-300">
        Reply
      </button>
    </div>
  );
}
