type LanguageKeyType = "wedding_rio_rut_i18nextLng";

interface GetLocalStorageInterface {
  key: LanguageKeyType;
}
interface SetLocalStorageInterface extends GetLocalStorageInterface {
  value?: string;
}

export const localStorageService = (() => {
  function _setItem({ key, value }: { key: string; value: string }) {
    localStorage.setItem(key, value);
  }

  function _setLanguage({ key, value }: SetLocalStorageInterface) {
    if (value) {
      _setItem({
        key,
        value
      });
    }
  }
  function _getLanguage() {
    if (typeof window !== "undefined") return localStorage?.getItem("i18nextLng");
    return null;
  }

  return {
    setLanguage: _setLanguage,
    getLanguage: _getLanguage
  };
})();
