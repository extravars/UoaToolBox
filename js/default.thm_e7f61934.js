window.skins=window.skins||{};
                function __extends(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = {};
                generateEUI.paths = {};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml"};generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_disabled_png")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "checkbox_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 6;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_sb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "thumb_png";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_pb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "thumb_pb_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_disabled_png")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "radiobutton_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.bottom = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.percentHeight = 100;
		t.right = 0;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 24;
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 20;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "on_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = "handle_png";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.width = 8;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_png";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "thumb_png";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/ScoreMemberInfoSkin.exml'] = window.ScoreMemberInfoSkin = (function (_super) {
	__extends(ScoreMemberInfoSkin, _super);
	function ScoreMemberInfoSkin() {
		_super.call(this);
		this.skinParts = ["lblTeamId","lblClouth","lblMember","lblBaseVo","lblBaseDa","lblBasePe","lblSkillVo","lblSkillDa","lblSkillPe","lblBaseSkill","cbPrecious","cbDiffColor"];
		
		this.height = 172;
		this.width = 824;
		this.elementsContent = [this._Rect1_i(),this._Group1_i(),this._Group2_i(),this._Group4_i(),this._Group5_i(),this._Group7_i(),this._Group8_i(),this._Group9_i(),this._Group10_i(),this._Group11_i(),this._Group12_i(),this._Group13_i(),this._Group14_i(),this.cbPrecious_i(),this.cbDiffColor_i()];
	}
	var _proto = ScoreMemberInfoSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.bottom = 0;
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.fillColor = 0xffffff;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 44;
		t.horizontalCenter = 209.5;
		t.visible = false;
		t.width = 125;
		t.y = 62.99;
		t.elementsContent = [this._Rect2_i(),this.lblTeamId_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 10;
		t.ellipseWidth = 10;
		t.fillColor = 0x6ae8aa;
		t.height = 36;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 108;
		t.x = 5;
		t.y = 3;
		return t;
	};
	_proto.lblTeamId_i = function () {
		var t = new eui.Label();
		this.lblTeamId = t;
		t.fontFamily = "SimHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 30;
		t.stroke = 2;
		t.strokeColor = 0x02A3FF;
		t.text = "队员1";
		t.textColor = 0xFFFFFF;
		t.x = 27;
		t.y = 5;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 44;
		t.width = 140;
		t.x = 7;
		t.y = 9.99;
		t.elementsContent = [this._Rect3_i(),this._Label1_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 10;
		t.ellipseWidth = 10;
		t.fillColor = 0x103f69;
		t.height = 36;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 125;
		t.x = 5;
		t.y = 3;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "SimHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.strokeColor = 0x02A3FF;
		t.text = "卡基础值";
		t.textColor = 0xFFFFFF;
		t.x = 12;
		t.y = 8;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 44;
		t.width = 289;
		t.x = 7;
		t.y = 60.99;
		t.elementsContent = [this._Rect4_i(),this._Label2_i(),this._Group3_i()];
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 10;
		t.ellipseWidth = 10;
		t.fillColor = 0x103f69;
		t.height = 36;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 125;
		t.x = 5;
		t.y = 3;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "SimHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.strokeColor = 0x02A3FF;
		t.text = "服装分";
		t.textColor = 0xFFFFFF;
		t.x = 12;
		t.y = 8;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 46;
		t.width = 141;
		t.x = 142;
		t.y = 0;
		t.elementsContent = [this._Label3_i(),this._Rect5_i(),this.lblClouth_i()];
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "SimHei";
		t.size = 26;
		t.strokeColor = 0x02A3FF;
		t.text = "总:";
		t.textColor = 0x103f69;
		t.x = 8;
		t.y = 8;
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 10;
		t.ellipseWidth = 10;
		t.fillColor = 0xEFEAEA;
		t.height = 36;
		t.width = 86;
		t.x = 52;
		t.y = 4;
		return t;
	};
	_proto.lblClouth_i = function () {
		var t = new eui.EditableText();
		this.lblClouth = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 28;
		t.size = 26;
		t.strokeColor = 0x103f69;
		t.text = "375";
		t.textColor = 0x103f69;
		t.width = 80;
		t.x = 58;
		t.y = 8;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 44;
		t.width = 138;
		t.x = 7;
		t.y = 113.99;
		t.elementsContent = [this._Rect6_i(),this._Label4_i()];
		return t;
	};
	_proto._Rect6_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 10;
		t.ellipseWidth = 10;
		t.fillColor = 0x103f69;
		t.height = 36;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 125;
		t.x = 5;
		t.y = 3;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.fontFamily = "SimHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.strokeColor = 0x02A3FF;
		t.text = "技能加成";
		t.textColor = 0xFFFFFF;
		t.x = 12;
		t.y = 8;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 44;
		t.width = 376;
		t.x = 297;
		t.y = 61.99;
		t.elementsContent = [this._Rect7_i(),this._Label5_i(),this._Group6_i()];
		return t;
	};
	_proto._Rect7_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 10;
		t.ellipseWidth = 10;
		t.fillColor = 0x103f69;
		t.height = 36;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 125;
		t.x = 5;
		t.y = 3;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.fontFamily = "SimHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.strokeColor = 0x02A3FF;
		t.text = "成员分";
		t.textColor = 0xFFFFFF;
		t.x = 12;
		t.y = 8;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 46;
		t.width = 208;
		t.x = 138;
		t.y = 0;
		t.elementsContent = [this._Label6_i(),this._Rect8_i(),this.lblMember_i()];
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.fontFamily = "SimHei";
		t.size = 26;
		t.strokeColor = 0x02A3FF;
		t.text = "总:";
		t.textColor = 0x103f69;
		t.x = 8;
		t.y = 8;
		return t;
	};
	_proto._Rect8_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 10;
		t.ellipseWidth = 10;
		t.fillColor = 0xEFEAEA;
		t.height = 36;
		t.width = 116;
		t.x = 52;
		t.y = 4;
		return t;
	};
	_proto.lblMember_i = function () {
		var t = new eui.EditableText();
		this.lblMember = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 28;
		t.size = 26;
		t.strokeColor = 0x02A3FF;
		t.text = "0";
		t.textColor = 0x103f69;
		t.width = 106;
		t.x = 58;
		t.y = 8;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 46;
		t.width = 141;
		t.x = 149;
		t.y = 9.99;
		t.elementsContent = [this._Label7_i(),this._Rect9_i(),this.lblBaseVo_i()];
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.fontFamily = "SimHei";
		t.size = 26;
		t.strokeColor = 0x02a3ff;
		t.text = "Vo:";
		t.textColor = 0x103f69;
		t.x = 8;
		t.y = 8;
		return t;
	};
	_proto._Rect9_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 10;
		t.ellipseWidth = 10;
		t.fillColor = 0xefeaea;
		t.height = 36;
		t.width = 86;
		t.x = 52;
		t.y = 4;
		return t;
	};
	_proto.lblBaseVo_i = function () {
		var t = new eui.EditableText();
		this.lblBaseVo = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 28;
		t.size = 26;
		t.strokeColor = 0x02a3ff;
		t.text = "0";
		t.textColor = 0x103f69;
		t.width = 80;
		t.x = 58;
		t.y = 8;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 46;
		t.width = 141;
		t.x = 291;
		t.y = 9.99;
		t.elementsContent = [this._Label8_i(),this._Rect10_i(),this.lblBaseDa_i()];
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.fontFamily = "SimHei";
		t.size = 26;
		t.strokeColor = 0x02A3FF;
		t.text = "Da:";
		t.textColor = 0x103f69;
		t.x = 8;
		t.y = 8;
		return t;
	};
	_proto._Rect10_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 10;
		t.ellipseWidth = 10;
		t.fillColor = 0xEFEAEA;
		t.height = 36;
		t.width = 86;
		t.x = 52;
		t.y = 4;
		return t;
	};
	_proto.lblBaseDa_i = function () {
		var t = new eui.EditableText();
		this.lblBaseDa = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 28;
		t.size = 26;
		t.strokeColor = 0x02A3FF;
		t.text = "0";
		t.textColor = 0x103f69;
		t.width = 80;
		t.x = 58;
		t.y = 8;
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 46;
		t.width = 141;
		t.x = 435;
		t.y = 9.99;
		t.elementsContent = [this._Label9_i(),this._Rect11_i(),this.lblBasePe_i()];
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.fontFamily = "SimHei";
		t.size = 26;
		t.strokeColor = 0x02A3FF;
		t.text = "Pe:";
		t.textColor = 0x103f69;
		t.x = 8;
		t.y = 8;
		return t;
	};
	_proto._Rect11_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 10;
		t.ellipseWidth = 10;
		t.fillColor = 0xEFEAEA;
		t.height = 36;
		t.width = 86;
		t.x = 52;
		t.y = 4;
		return t;
	};
	_proto.lblBasePe_i = function () {
		var t = new eui.EditableText();
		this.lblBasePe = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 28;
		t.size = 26;
		t.strokeColor = 0x02A3FF;
		t.text = "0";
		t.textColor = 0x103f69;
		t.width = 80;
		t.x = 58;
		t.y = 8;
		return t;
	};
	_proto._Group11_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 46;
		t.width = 141;
		t.x = 148;
		t.y = 112.99;
		t.elementsContent = [this._Rect12_i(),this._Label10_i(),this._Label11_i(),this.lblSkillVo_i()];
		return t;
	};
	_proto._Rect12_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 10;
		t.ellipseWidth = 10;
		t.fillColor = 0xefeaea;
		t.height = 35;
		t.width = 63;
		t.x = 52;
		t.y = 4;
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.fontFamily = "SimHei";
		t.size = 26;
		t.strokeColor = 0x02A3FF;
		t.text = "Vo:";
		t.textColor = 0x103f69;
		t.x = 8;
		t.y = 8;
		return t;
	};
	_proto._Label11_i = function () {
		var t = new eui.Label();
		t.fontFamily = "SimHei";
		t.size = 26;
		t.strokeColor = 0x103f69;
		t.text = "%";
		t.textColor = 0x103f69;
		t.x = 118;
		t.y = 8;
		return t;
	};
	_proto.lblSkillVo_i = function () {
		var t = new eui.EditableText();
		this.lblSkillVo = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 28;
		t.size = 26;
		t.strokeColor = 0x02a3ff;
		t.text = "0";
		t.textColor = 0x103f69;
		t.width = 51;
		t.x = 58;
		t.y = 8;
		return t;
	};
	_proto._Group12_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 46;
		t.width = 141;
		t.x = 294;
		t.y = 112.99;
		t.elementsContent = [this._Label12_i(),this._Rect13_i(),this.lblSkillDa_i(),this._Label13_i()];
		return t;
	};
	_proto._Label12_i = function () {
		var t = new eui.Label();
		t.fontFamily = "SimHei";
		t.size = 26;
		t.strokeColor = 0x02A3FF;
		t.text = "Da:";
		t.textColor = 0x103f69;
		t.x = 8;
		t.y = 8;
		return t;
	};
	_proto._Rect13_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 10;
		t.ellipseWidth = 10;
		t.fillColor = 0xEFEAEA;
		t.height = 35;
		t.width = 68;
		t.x = 50;
		t.y = 4;
		return t;
	};
	_proto.lblSkillDa_i = function () {
		var t = new eui.EditableText();
		this.lblSkillDa = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 28;
		t.size = 26;
		t.strokeColor = 0x02a3ff;
		t.text = "0";
		t.textColor = 0x103f69;
		t.width = 80;
		t.x = 56;
		t.y = 8;
		return t;
	};
	_proto._Label13_i = function () {
		var t = new eui.Label();
		t.fontFamily = "SimHei";
		t.size = 26;
		t.strokeColor = 0x02A3FF;
		t.text = "%";
		t.textColor = 0x103f69;
		t.x = 123;
		t.y = 8;
		return t;
	};
	_proto._Group13_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 46;
		t.width = 141;
		t.x = 435;
		t.y = 112.99;
		t.elementsContent = [this._Label14_i(),this._Rect14_i(),this.lblSkillPe_i(),this._Label15_i()];
		return t;
	};
	_proto._Label14_i = function () {
		var t = new eui.Label();
		t.fontFamily = "SimHei";
		t.size = 26;
		t.strokeColor = 0x02A3FF;
		t.text = "Pe:";
		t.textColor = 0x103f69;
		t.x = 8;
		t.y = 8;
		return t;
	};
	_proto._Rect14_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 10;
		t.ellipseWidth = 10;
		t.fillColor = 0xEFEAEA;
		t.height = 36;
		t.width = 67;
		t.x = 52;
		t.y = 4;
		return t;
	};
	_proto.lblSkillPe_i = function () {
		var t = new eui.EditableText();
		this.lblSkillPe = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 31;
		t.size = 26;
		t.strokeColor = 0x02A3FF;
		t.text = "0";
		t.textColor = 0x103f69;
		t.width = 59;
		t.x = 58;
		t.y = 8;
		return t;
	};
	_proto._Label15_i = function () {
		var t = new eui.Label();
		t.fontFamily = "SimHei";
		t.size = 26;
		t.strokeColor = 0x02A3FF;
		t.text = "%";
		t.textColor = 0x103f69;
		t.x = 124;
		t.y = 8;
		return t;
	};
	_proto._Group14_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 46;
		t.width = 174;
		t.x = 578;
		t.y = 9.99;
		t.elementsContent = [this._Label16_i(),this._Rect15_i(),this.lblBaseSkill_i()];
		return t;
	};
	_proto._Label16_i = function () {
		var t = new eui.Label();
		t.fontFamily = "SimHei";
		t.size = 26;
		t.strokeColor = 0x02A3FF;
		t.text = "技能:";
		t.textColor = 0x103f69;
		t.x = 8;
		t.y = 8;
		return t;
	};
	_proto._Rect15_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 10;
		t.ellipseWidth = 10;
		t.fillColor = 0xEFEAEA;
		t.height = 36;
		t.width = 86;
		t.x = 81;
		t.y = 4;
		return t;
	};
	_proto.lblBaseSkill_i = function () {
		var t = new eui.EditableText();
		this.lblBaseSkill = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 28;
		t.size = 26;
		t.strokeColor = 0x02a3ff;
		t.text = "430";
		t.textColor = 0x103f69;
		t.width = 80;
		t.x = 87;
		t.y = 8;
		return t;
	};
	_proto.cbPrecious_i = function () {
		var t = new eui.CheckBox();
		this.cbPrecious = t;
		t.enabled = true;
		t.label = "是否Pre卡";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 584;
		t.y = 124.99;
		return t;
	};
	_proto.cbDiffColor_i = function () {
		var t = new eui.CheckBox();
		this.cbDiffColor = t;
		t.enabled = true;
		t.label = "非歌曲色";
		t.scaleX = 1;
		t.scaleY = 1;
		t.selected = false;
		t.x = 711;
		t.y = 124.99;
		return t;
	};
	return ScoreMemberInfoSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/ScoreCalculaterMainSkin.exml'] = window.ScoreCalculaterMainSkin = (function (_super) {
	__extends(ScoreCalculaterMainSkin, _super);
	function ScoreCalculaterMainSkin() {
		_super.call(this);
		this.skinParts = ["memberInfo0","memberInfo1","memberInfo2","memberInfo3","memberInfo4","lblSkinVo","lblSkinDa","lblSkinPe","lblFurnitureVo","lblFurnitureDa","lblFurniturePe","lblFurnitureSong","lblUserScore","cbSkill0","cbSkill1","cbSkill2","txtTeamScore","txtSongScore","txtTotalScore","gpGen"];
		
		this.height = 1080;
		this.width = 1920;
		this.elementsContent = [this._Rect1_i(),this._Group21_i()];
	}
	var _proto = ScoreCalculaterMainSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0xbedeea;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Group21_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 1080;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1920;
		t.elementsContent = [this.memberInfo0_i(),this.memberInfo1_i(),this.memberInfo2_i(),this.memberInfo3_i(),this.memberInfo4_i(),this._Group20_i()];
		return t;
	};
	_proto.memberInfo0_i = function () {
		var t = new ScoreMemberInfoView();
		this.memberInfo0 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "ScoreMemberInfoSkin";
		t.x = 80.08;
		t.y = 68;
		return t;
	};
	_proto.memberInfo1_i = function () {
		var t = new ScoreMemberInfoView();
		this.memberInfo1 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "ScoreMemberInfoSkin";
		t.x = 79.6;
		t.y = 257;
		return t;
	};
	_proto.memberInfo2_i = function () {
		var t = new ScoreMemberInfoView();
		this.memberInfo2 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "ScoreMemberInfoSkin";
		t.x = 79.6;
		t.y = 445;
		return t;
	};
	_proto.memberInfo3_i = function () {
		var t = new ScoreMemberInfoView();
		this.memberInfo3 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "ScoreMemberInfoSkin";
		t.x = 79.6;
		t.y = 634;
		return t;
	};
	_proto.memberInfo4_i = function () {
		var t = new ScoreMemberInfoView();
		this.memberInfo4 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "ScoreMemberInfoSkin";
		t.x = 79.6;
		t.y = 822;
		return t;
	};
	_proto._Group20_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 921.28;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 909.64;
		t.x = 923.22;
		t.y = 71.4;
		t.elementsContent = [this._Rect2_i(),this._Rect3_i(),this._Group4_i(),this._Group9_i(),this._Group11_i(),this._Group12_i(),this._Group14_i(),this._Group16_i(),this._Group18_i(),this._Group19_i(),this._Label24_i(),this._Label25_i(),this._Label26_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetY = 0;
		t.bottom = 579.25;
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.fillColor = 0xffffff;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.fillColor = 0xf9eaf9;
		t.left = 0;
		t.right = 0;
		t.top = 371;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.width = 790;
		t.x = 35;
		t.y = 14;
		t.elementsContent = [this._Rect4_i(),this._Label1_i(),this._Group1_i(),this._Group2_i(),this._Group3_i()];
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 10;
		t.ellipseWidth = 10;
		t.fillColor = 0x103F69;
		t.height = 36;
		t.width = 125;
		t.x = 2;
		t.y = 6;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "SimHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "皮肤加成";
		t.textColor = 0xffffff;
		t.x = 12;
		t.y = 12;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 46;
		t.width = 141;
		t.x = 137.52;
		t.y = 2;
		t.elementsContent = [this._Rect5_i(),this._Label2_i(),this._Label3_i(),this.lblSkinVo_i()];
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 10;
		t.ellipseWidth = 10;
		t.fillColor = 0xEFEAEA;
		t.height = 35;
		t.width = 63;
		t.x = 52;
		t.y = 5;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "SimHei";
		t.size = 26;
		t.text = "Vo:";
		t.textColor = 0x103F69;
		t.x = 8;
		t.y = 9;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "SimHei";
		t.size = 26;
		t.text = "%";
		t.textColor = 0x103F69;
		t.x = 118;
		t.y = 9;
		return t;
	};
	_proto.lblSkinVo_i = function () {
		var t = new eui.EditableText();
		this.lblSkinVo = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 28;
		t.size = 26;
		t.text = "0";
		t.textColor = 0x103F69;
		t.width = 51;
		t.x = 58;
		t.y = 9;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 46;
		t.width = 141;
		t.x = 308;
		t.y = 2;
		t.elementsContent = [this._Rect6_i(),this._Label4_i(),this._Label5_i(),this.lblSkinDa_i()];
		return t;
	};
	_proto._Rect6_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 10;
		t.ellipseWidth = 10;
		t.fillColor = 0xEFEAEA;
		t.height = 35;
		t.width = 63;
		t.x = 52;
		t.y = 5;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.fontFamily = "SimHei";
		t.size = 26;
		t.text = "Da:";
		t.textColor = 0x103F69;
		t.x = 8;
		t.y = 9;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.fontFamily = "SimHei";
		t.size = 26;
		t.text = "%";
		t.textColor = 0x103F69;
		t.x = 118;
		t.y = 9;
		return t;
	};
	_proto.lblSkinDa_i = function () {
		var t = new eui.EditableText();
		this.lblSkinDa = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 28;
		t.size = 26;
		t.text = "0";
		t.textColor = 0x103F69;
		t.width = 51;
		t.x = 58;
		t.y = 9;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 46;
		t.width = 141;
		t.x = 478.52;
		t.y = 2;
		t.elementsContent = [this._Rect7_i(),this._Label6_i(),this._Label7_i(),this.lblSkinPe_i()];
		return t;
	};
	_proto._Rect7_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 10;
		t.ellipseWidth = 10;
		t.fillColor = 0xEFEAEA;
		t.height = 35;
		t.width = 63;
		t.x = 52;
		t.y = 5;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.fontFamily = "SimHei";
		t.size = 26;
		t.text = "Pe:";
		t.textColor = 0x103F69;
		t.x = 8;
		t.y = 9;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.fontFamily = "SimHei";
		t.size = 26;
		t.text = "%";
		t.textColor = 0x103F69;
		t.x = 118;
		t.y = 9;
		return t;
	};
	_proto.lblSkinPe_i = function () {
		var t = new eui.EditableText();
		this.lblSkinPe = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 28;
		t.size = 26;
		t.text = "0";
		t.textColor = 0x103F69;
		t.width = 51;
		t.x = 58;
		t.y = 9;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.width = 790;
		t.x = 35;
		t.y = 82;
		t.elementsContent = [this._Rect8_i(),this._Label8_i(),this._Group5_i(),this._Group6_i(),this._Group7_i(),this._Group8_i()];
		return t;
	};
	_proto._Rect8_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 10;
		t.ellipseWidth = 10;
		t.fillColor = 0x103F69;
		t.height = 36;
		t.width = 125;
		t.x = 2;
		t.y = 6;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.fontFamily = "SimHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "家具加成";
		t.textColor = 0xffffff;
		t.x = 12;
		t.y = 12;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 46;
		t.width = 141;
		t.x = 137.52;
		t.y = 2;
		t.elementsContent = [this._Rect9_i(),this._Label9_i(),this._Label10_i(),this.lblFurnitureVo_i()];
		return t;
	};
	_proto._Rect9_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 10;
		t.ellipseWidth = 10;
		t.fillColor = 0xEFEAEA;
		t.height = 35;
		t.width = 63;
		t.x = 52;
		t.y = 5;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.fontFamily = "SimHei";
		t.size = 26;
		t.text = "Vo:";
		t.textColor = 0x103F69;
		t.x = 8;
		t.y = 9;
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.fontFamily = "SimHei";
		t.size = 26;
		t.text = "%";
		t.textColor = 0x103F69;
		t.x = 118;
		t.y = 9;
		return t;
	};
	_proto.lblFurnitureVo_i = function () {
		var t = new eui.EditableText();
		this.lblFurnitureVo = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 28;
		t.size = 26;
		t.text = "17";
		t.textColor = 0x103f69;
		t.width = 51;
		t.x = 58;
		t.y = 9;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 46;
		t.width = 141;
		t.x = 308;
		t.y = 2;
		t.elementsContent = [this._Rect10_i(),this._Label11_i(),this._Label12_i(),this.lblFurnitureDa_i()];
		return t;
	};
	_proto._Rect10_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 10;
		t.ellipseWidth = 10;
		t.fillColor = 0xEFEAEA;
		t.height = 35;
		t.width = 63;
		t.x = 52;
		t.y = 5;
		return t;
	};
	_proto._Label11_i = function () {
		var t = new eui.Label();
		t.fontFamily = "SimHei";
		t.size = 26;
		t.text = "Da:";
		t.textColor = 0x103F69;
		t.x = 8;
		t.y = 9;
		return t;
	};
	_proto._Label12_i = function () {
		var t = new eui.Label();
		t.fontFamily = "SimHei";
		t.size = 26;
		t.text = "%";
		t.textColor = 0x103F69;
		t.x = 118;
		t.y = 9;
		return t;
	};
	_proto.lblFurnitureDa_i = function () {
		var t = new eui.EditableText();
		this.lblFurnitureDa = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 28;
		t.size = 26;
		t.text = "17";
		t.textColor = 0x103F69;
		t.width = 51;
		t.x = 58;
		t.y = 9;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 46;
		t.width = 141;
		t.x = 478.52;
		t.y = 2;
		t.elementsContent = [this._Rect11_i(),this._Label13_i(),this._Label14_i(),this.lblFurniturePe_i()];
		return t;
	};
	_proto._Rect11_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 10;
		t.ellipseWidth = 10;
		t.fillColor = 0xEFEAEA;
		t.height = 35;
		t.width = 63;
		t.x = 52;
		t.y = 5;
		return t;
	};
	_proto._Label13_i = function () {
		var t = new eui.Label();
		t.fontFamily = "SimHei";
		t.size = 26;
		t.text = "Pe:";
		t.textColor = 0x103F69;
		t.x = 8;
		t.y = 9;
		return t;
	};
	_proto._Label14_i = function () {
		var t = new eui.Label();
		t.fontFamily = "SimHei";
		t.size = 26;
		t.text = "%";
		t.textColor = 0x103F69;
		t.x = 118;
		t.y = 9;
		return t;
	};
	_proto.lblFurniturePe_i = function () {
		var t = new eui.EditableText();
		this.lblFurniturePe = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 28;
		t.size = 26;
		t.text = "17";
		t.textColor = 0x103F69;
		t.width = 51;
		t.x = 58;
		t.y = 9;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 46;
		t.width = 141;
		t.x = 646.75;
		t.y = 2;
		t.elementsContent = [this._Rect12_i(),this._Label15_i(),this._Label16_i(),this.lblFurnitureSong_i()];
		return t;
	};
	_proto._Rect12_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 10;
		t.ellipseWidth = 10;
		t.fillColor = 0xEFEAEA;
		t.height = 35;
		t.width = 63;
		t.x = 52;
		t.y = 5;
		return t;
	};
	_proto._Label15_i = function () {
		var t = new eui.Label();
		t.fontFamily = "SimHei";
		t.size = 26;
		t.text = "歌:";
		t.textColor = 0x103F69;
		t.x = 8;
		t.y = 9;
		return t;
	};
	_proto._Label16_i = function () {
		var t = new eui.Label();
		t.fontFamily = "SimHei";
		t.size = 26;
		t.text = "%";
		t.textColor = 0x103F69;
		t.x = 118;
		t.y = 9;
		return t;
	};
	_proto.lblFurnitureSong_i = function () {
		var t = new eui.EditableText();
		this.lblFurnitureSong = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 28;
		t.size = 26;
		t.text = "0";
		t.textColor = 0x103F69;
		t.width = 51;
		t.x = 58;
		t.y = 9;
		return t;
	};
	_proto._Group11_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.visible = false;
		t.width = 790;
		t.x = 35;
		t.y = 149.76;
		t.elementsContent = [this._Rect13_i(),this._Label17_i(),this._Group10_i()];
		return t;
	};
	_proto._Rect13_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 10;
		t.ellipseWidth = 10;
		t.fillColor = 0x103F69;
		t.height = 36;
		t.width = 125;
		t.x = 2;
		t.y = 6;
		return t;
	};
	_proto._Label17_i = function () {
		var t = new eui.Label();
		t.fontFamily = "SimHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "号综合力";
		t.textColor = 0xffffff;
		t.x = 12;
		t.y = 12;
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 46;
		t.width = 306;
		t.x = 137.52;
		t.y = 2;
		t.elementsContent = [this._Rect14_i(),this.lblUserScore_i()];
		return t;
	};
	_proto._Rect14_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 10;
		t.ellipseWidth = 10;
		t.fillColor = 0xEFEAEA;
		t.height = 35;
		t.width = 280;
		t.x = 5;
		t.y = 5;
		return t;
	};
	_proto.lblUserScore_i = function () {
		var t = new eui.EditableText();
		this.lblUserScore = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 28;
		t.size = 26;
		t.text = "0";
		t.textColor = 0x103F69;
		t.width = 264;
		t.x = 12;
		t.y = 9;
		return t;
	};
	_proto._Group12_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 110;
		t.width = 790;
		t.x = 34;
		t.y = 212.76;
		t.elementsContent = [this._Rect15_i(),this._Label18_i(),this.cbSkill0_i(),this.cbSkill1_i(),this.cbSkill2_i(),this._Label19_i()];
		return t;
	};
	_proto._Rect15_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 10;
		t.ellipseWidth = 10;
		t.fillColor = 0x103F69;
		t.height = 36;
		t.width = 125;
		t.x = 2;
		t.y = 6;
		return t;
	};
	_proto._Label18_i = function () {
		var t = new eui.Label();
		t.fontFamily = "SimHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "队长技能";
		t.textColor = 0xffffff;
		t.x = 12;
		t.y = 12;
		return t;
	};
	_proto.cbSkill0_i = function () {
		var t = new eui.CheckBox();
		this.cbSkill0 = t;
		t.label = "Vo";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 152.86;
		t.y = 14;
		return t;
	};
	_proto.cbSkill1_i = function () {
		var t = new eui.CheckBox();
		this.cbSkill1 = t;
		t.label = "Da";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 307.84;
		t.y = 14;
		return t;
	};
	_proto.cbSkill2_i = function () {
		var t = new eui.CheckBox();
		this.cbSkill2 = t;
		t.label = "Pe";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 464.32;
		t.y = 14;
		return t;
	};
	_proto._Label19_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "勾选生效属性(单,双,三边勾对应属性，取最高全部不勾)";
		t.textColor = 0x103f69;
		t.width = 840;
		t.x = 3;
		t.y = 59;
		return t;
	};
	_proto._Group14_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.width = 539;
		t.x = 32.5;
		t.y = 414.12;
		t.elementsContent = [this._Rect16_i(),this._Label20_i(),this._Group13_i()];
		return t;
	};
	_proto._Rect16_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 10;
		t.ellipseWidth = 10;
		t.fillColor = 0x103F69;
		t.height = 36;
		t.width = 177;
		t.x = 2;
		t.y = 6;
		return t;
	};
	_proto._Label20_i = function () {
		var t = new eui.Label();
		t.fontFamily = "SimHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "队伍显示";
		t.textColor = 0xffffff;
		t.x = 12;
		t.y = 12;
		return t;
	};
	_proto._Group13_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 46;
		t.width = 306;
		t.x = 184.52;
		t.y = 2;
		t.elementsContent = [this._Rect17_i(),this.txtTeamScore_i()];
		return t;
	};
	_proto._Rect17_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 10;
		t.ellipseWidth = 10;
		t.fillColor = 0xffffff;
		t.height = 35;
		t.width = 280;
		t.x = 5;
		t.y = 5;
		return t;
	};
	_proto.txtTeamScore_i = function () {
		var t = new eui.Label();
		this.txtTeamScore = t;
		t.anchorOffsetX = 0;
		t.size = 26;
		t.text = "0";
		t.textColor = 0x103f69;
		t.width = 174;
		t.x = 11;
		t.y = 10;
		return t;
	};
	_proto._Group16_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.width = 538;
		t.x = 32.5;
		t.y = 479.12;
		t.elementsContent = [this._Rect18_i(),this._Label21_i(),this._Group15_i()];
		return t;
	};
	_proto._Rect18_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 10;
		t.ellipseWidth = 10;
		t.fillColor = 0x103F69;
		t.height = 36;
		t.width = 177;
		t.x = 2;
		t.y = 6;
		return t;
	};
	_proto._Label21_i = function () {
		var t = new eui.Label();
		t.fontFamily = "SimHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "进同色歌显示";
		t.textColor = 0xffffff;
		t.x = 11;
		t.y = 12;
		return t;
	};
	_proto._Group15_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 46;
		t.width = 306;
		t.x = 184.52;
		t.y = 2;
		t.elementsContent = [this._Rect19_i(),this.txtSongScore_i()];
		return t;
	};
	_proto._Rect19_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 10;
		t.ellipseWidth = 10;
		t.fillColor = 0xffffff;
		t.height = 35;
		t.width = 280;
		t.x = 5;
		t.y = 5;
		return t;
	};
	_proto.txtSongScore_i = function () {
		var t = new eui.Label();
		this.txtSongScore = t;
		t.anchorOffsetX = 0;
		t.size = 26;
		t.text = "0";
		t.textColor = 0x103f69;
		t.width = 174;
		t.x = 11;
		t.y = 10;
		return t;
	};
	_proto._Group18_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.visible = false;
		t.width = 537;
		t.x = 32.5;
		t.y = 544.12;
		t.elementsContent = [this._Rect20_i(),this._Label22_i(),this._Group17_i()];
		return t;
	};
	_proto._Rect20_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 10;
		t.ellipseWidth = 10;
		t.fillColor = 0x103F69;
		t.height = 36;
		t.width = 177;
		t.x = 2;
		t.y = 6;
		return t;
	};
	_proto._Label22_i = function () {
		var t = new eui.Label();
		t.fontFamily = "SimHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "隐藏总分参考";
		t.textColor = 0xffffff;
		t.x = 11;
		t.y = 12;
		return t;
	};
	_proto._Group17_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 46;
		t.width = 306;
		t.x = 184.52;
		t.y = 2;
		t.elementsContent = [this._Rect21_i(),this.txtTotalScore_i()];
		return t;
	};
	_proto._Rect21_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 10;
		t.ellipseWidth = 10;
		t.fillColor = 0xffffff;
		t.height = 35;
		t.width = 280;
		t.x = 5;
		t.y = 5;
		return t;
	};
	_proto.txtTotalScore_i = function () {
		var t = new eui.Label();
		this.txtTotalScore = t;
		t.anchorOffsetX = 0;
		t.size = 26;
		t.text = "0";
		t.textColor = 0x103f69;
		t.width = 174;
		t.x = 11;
		t.y = 10;
		return t;
	};
	_proto._Group19_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 113;
		t.width = 245;
		t.x = 603.72;
		t.y = 417.5;
		t.elementsContent = [this.gpGen_i(),this._Label23_i()];
		return t;
	};
	_proto.gpGen_i = function () {
		var t = new eui.Rect();
		this.gpGen = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 2;
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.fillColor = 0x0a1d4c;
		t.left = 2;
		t.right = -2;
		t.top = -2;
		return t;
	};
	_proto._Label23_i = function () {
		var t = new eui.Label();
		t.fontFamily = "SimHei";
		t.size = 60;
		t.text = "计算";
		t.touchEnabled = false;
		t.x = 61;
		t.y = 20.67;
		return t;
	};
	_proto._Label24_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Arial";
		t.height = 35.33;
		t.text = "UOA战力计算器 Ver.1.0.2     by Evar";
		t.textColor = 0x103f69;
		t.width = 509;
		t.x = 402.84;
		t.y = 881.35;
		return t;
	};
	_proto._Label25_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "Arial";
		t.text = "UOA Q群：135384973";
		t.textColor = 0x103f69;
		t.width = 397;
		t.x = 402.24;
		t.y = 833;
		return t;
	};
	_proto._Label26_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Arial";
		t.height = 186.06;
		t.lineSpacing = 10;
		t.text = "*新增非歌曲色选项，用于Veaut卡带不同颜色队员进歌估算\n*服装如果带技能请手动输入385分\n*Pre/双人Pre卡请填写原始概率并勾选 是否Pre卡选项";
		t.textColor = 0x103f69;
		t.width = 787.91;
		t.x = 36.37;
		t.y = 584.31;
		return t;
	};
	return ScoreCalculaterMainSkin;
})(eui.Skin);