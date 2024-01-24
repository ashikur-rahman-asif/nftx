/* eslint-disable react/prop-types */
function Test({ index }) {
  return (
    <div
      className={`test flex w-full gap-6 items-center ${
        index % 2 === 0 ? "flex-row-reverse gap-14 test2" : "flex-row test3"
      }`}
    >
      <div
        className={`w-1/2 bg-slate-500 p-6 relative test4 ${
          index % 2 === 0 ? "rounded-r-2xl test5" : "rounded-l-2xl test6"
        }`}
      >
        <span
          className={`test7 absolute h-[calc(100%+2rem)] bg-[red] w-7 rounded-full top-1/2 -translate-y-1/2 ${
            index % 2 === 0 ? "-left-7 test8" : "right-0 test9"
          }`}
        />
        <ul className="list-disc pl-4 relative test10">
          <span className="test11 absolute top-1/2 left-[3.5px] w-px h-[calc(100%_-_20px)] -translate-y-1/2 bg-[black]" />
          <li>Befriending & Chat Functions</li>
          <li>Challenging Feature</li>
          <li>Corsair Wheel</li>
          <li>Mobile Version Launch</li>
        </ul>
      </div>
      <span className="text-3xl test12">2022</span>
    </div>
  );
}
const RoadMap = () => {
  return (
    <div className="container roadmap-section">
      <h1 className="roadmap-title">RoadMap</h1>
      <div className="mt-20 w-[800px] mx-auto space-y-14 test13">
        <Test index={1} />
        <Test index={2} />
        <Test index={3} />
        <Test index={4} />
      </div>
      
    </div>
  );
};

export default RoadMap;
