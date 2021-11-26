export interface MenuItem {
	id: number;
	order: number;
	title: string;
	url: string;
	visible: true;
}

export interface PlatformSettings {
	exercices_library: boolean;
	upper_menu: MenuItem[];
}

export interface Settings {
	type: string;
	code: string;
	menu: string;
}

export interface ModuleRead {
	id: number;
	permissions: string;
	settings: Settings;
	code: string;
	verbose_name: string;
}
