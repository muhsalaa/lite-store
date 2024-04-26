function validateString(data: string) {
	if (!/^[a-zA-Z0-9,.-\s'"/]+$/.test(data)) {
		return 'Data mengandung karakter yang tidak diizinkan';
	}
}

function validateName(data: string) {
	if (!/^[a-zA-Z\s']+$/.test(data)) {
		return 'Data mengandung karakter yang tidak diizinkan';
	}
}

function validatePhoneNumber(data: string) {
	if (!/^(\+62|0)[1-9][0-9]{1,14}$/.test(data)) {
		return 'Format nomor telpon salah';
	}
}

function validateEmpty(data: string) {
	if (!data) {
		return 'Data harus diisi';
	}
}

export const validator = {
	string: validateString,
	empty: validateEmpty,
	phone: validatePhoneNumber,
	name: validateName
};
