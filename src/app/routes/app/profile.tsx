import { ContentLayout } from '@/components/layouts';
// import { UpdateProfile } from '@/features/users/components/update-profile';
import { useUser } from '@/lib/auth';

type EntryProps = {
  label: string;
  value: string;
};
const Entry = ({ label, value }: EntryProps) => (
  <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
    <dt className="text-sm font-medium text-gray-500">{label}</dt>
    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
      {value}
    </dd>
  </div>
);

export const ProfileRoute = () => {
  const user = useUser();
  if (!user.data) return null;
  const { username, role, firstName, lastName } = user.data?.result;

  return (
    <ContentLayout title="پروفایل">
      <div className="overflow-hidden bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <div className="flex justify-between">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              اطلاعات کاربر
            </h3>
            {/* <UpdateProfile /> */}
          </div>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            جزئیات شخصی کاربر.
          </p>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
          <dl className="sm:divide-y sm:divide-gray-200">
            <Entry label="نام" value={firstName} />
            <Entry label="نام خانوادگی" value={lastName} />
            <Entry label="آدرس ایمیل" value={username} />
            <Entry label="نقش" value={role} />
          </dl>
        </div>
      </div>
    </ContentLayout>
  );
};
