import RouteCommon from "./common.route";
import RouteAdmin from "./admin.route";
const authecation = false;
export default function Index() {
  return authecation ? (
    <RouteAdmin path="admin" />
  ) : (
    <RouteCommon path="common" />
  );
}
