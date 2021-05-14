/** @format */

export const useRoleMap = (roleId) => {
	switch (roleId) {
		case 1:
			return 'admin';
		case 2:
			return 'initiator';
		case 3:
			return 'approver';
		case 4:
			return 'viewer';
	}
};
