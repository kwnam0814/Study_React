import React from "react";

const Member = ({ member }) => {
  return (
    // isActive 조건에 따라 배경색 결정
    <div
      className={`p-[15px] my-[10px] rounded-[8px] border border-solid ${
        member.isActive ? "bg-[#e8f5e9]" : "bg-[#eeeeee]"
      }`}
      // 삼항연산자를 사용하기 위해 className을 ""로 감싸는 것이 아닌, {}로 감싸야 JS 문법이 가능해짐
    >
      <strong className="font-bold">{member.name}</strong>

      <span className="ml-1">
        {member.role === "admin" ? "관리자" : "일반 회원"}
      </span>

      {/* isActive가 false일 때만 표시 */}
      {!member.isActive && (
        <span className="ml-[10px] text-[0.8rem] text-gray-500">
          비활성 계정
        </span>
      )}
    </div>
  );
};

export default Member;
