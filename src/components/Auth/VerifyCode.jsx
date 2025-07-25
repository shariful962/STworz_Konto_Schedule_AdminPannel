import React from "react";
import { useTranslation } from "react-i18next";
 
const VerifyCode = () => {
  const email = "demo@gmail.com";
  const { t } = useTranslation();
  return (
    <div className="mx-auto max-w-md px-4  font-Roboto">
      <h3 className="text-[1.75rem] md:text-[2rem] font-medium">
        {t("auth.checkEmail")}
      </h3>
      <p className="text-gray-400">
        {t("auth.checkEmailDescLine1")} {email} {t("auth.checkEmailDescLine2")}
      </p>
      <div>
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
      </div>
      <button className="submit_btn bg-Primary text-white rounded-2xl w-full max-h-30">
        {t("auth.verifyCode")}
      </button>
      <p className="text-gray-400 text-base">
        {t("auth.haventGotEmail")}
        <span className="text-Primary underline">{t("auth.resentEmail")}</span>
      </p>
    </div>
  );
};
 
export default VerifyCode;