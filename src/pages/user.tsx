import { UserProfile } from "@clerk/nextjs";
import Layout from "../components/common/layout";

const UserProfilePage = () => (
  <>
  <Layout>
  <UserProfile path="/user" routing="path" />
  </Layout>
  </>
  );

export default UserProfilePage;