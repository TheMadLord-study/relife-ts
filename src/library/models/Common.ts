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

export interface ModuleRead {
	id: number;
	permissions: string;
	settings: string;
	code: string;
	verbose_name: string;
}
