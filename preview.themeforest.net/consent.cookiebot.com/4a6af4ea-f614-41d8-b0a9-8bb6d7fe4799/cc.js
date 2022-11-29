// 2.42.1 - 2022-11-22T07:21:48.770Z
! function() {
    var DialogVersion;

    function appendStylesheet(document, updatedStylesheet) {
        var head = document.head || document.getElementsByTagName("head")[0],
            styleElement = document.createElement("style");
        styleElement.setAttribute("type", "text/css"), styleElement.id = "CookiebotDialogStyle", styleElement.appendChild(document.createTextNode(updatedStylesheet)), head.appendChild(styleElement)
    }! function(DialogVersion) {
        DialogVersion[DialogVersion.ElementalCustom = 1] = "ElementalCustom", DialogVersion[DialogVersion.Swift = 2] = "Swift"
    }(DialogVersion || (DialogVersion = {}));
    var generateStylesAndAppendStylesheet = function(document, dialog, templatename) {
        var newstylesheet;
        if ("custom" === templatename) return newstylesheet = dialog.customTemplateDef.CSS, void appendStylesheet(document, newstylesheet);
        var isDefaultColorTheme = "white" === dialog.theme || "dark" === dialog.theme,
            isWhiteTheme = "white" === dialog.theme,
            isDarkTheme = "dark" === dialog.theme;
        if (newstylesheet = dialog.styles[templatename], dialog.version === DialogVersion.ElementalCustom) return isDefaultColorTheme && (dialog.customColors.background = isWhiteTheme ? "#ffffff" : "#161616", dialog.customColors.text = isWhiteTheme ? "#2a2a2a" : "#ffffff", dialog.customColors.acceptbutton = "#188600", dialog.customColors.selectionbutton = "#188600", dialog.customColors.declinebutton = "#333333", dialog.customColors.buttontext = "#ffffff", dialog.customColors.tab = isWhiteTheme ? "#f6f6f9" : "#262626", dialog.customColors.border = isWhiteTheme ? "#cccccc" : "#404040"), newstylesheet = newstylesheet.replace(/#000001/g, dialog.customColors.background).replace(/#000002/g, dialog.customColors.text).replace(/#000003/g, dialog.customColors.acceptbutton).replace(/#000004/g, dialog.customColors.declinebutton).replace(/#000005/g, dialog.customColors.buttontext).replace(/#000006/g, dialog.customColors.tab).replace(/#000008/g, dialog.customColors.border).replace(/#000009/g, dialog.customColors.selectionbutton).replace(/url\(showdetails\.png\)/g, "url(" + dialog.customImages.showdetails + ")").replace(/url\(hidedetails\.png\)/g, "url(" + dialog.customImages.hidedetails + ")").replace(/url\(CheckedNofocus\.png\)/g, "url(" + dialog.customImages.cbCheckedNofocus + ")").replace(/url\(CheckedFocus\.png\)/g, "url(" + dialog.customImages.cbCheckedFocus + ")").replace(/url\(CheckedDisabled\.png\)/g, "url(" + dialog.customImages.cbCheckedDisabled + ")").replace(/url\(NotCheckedFocus\.png\)/g, "url(" + dialog.customImages.cbNotCheckedFocus + ")").replace(/url\(NotCheckedNoFocus\.png\)/g, "url(" + dialog.customImages.cbNotCheckedNoFocus + ")"), void appendStylesheet(document, newstylesheet);
        if (dialog.version === DialogVersion.Swift) {
            if (isDefaultColorTheme) {
                var primaryColor = isWhiteTheme ? "#1032CF" : "#2EA7FF",
                    textColor = isWhiteTheme ? "#141414" : "rgba(255, 255, 255, 0.87)",
                    primaryButtonBackground = primaryColor,
                    primaryButtonBorder = primaryColor,
                    primaryButtonText = isWhiteTheme ? "#ffffff" : "#141414",
                    secondaryButtonBackground = "transparent",
                    secondaryButtonBorder = primaryColor,
                    secondaryButtonText = textColor;
                "solid" === dialog.bannerButtonDesign ? (secondaryButtonBackground = primaryButtonBackground, secondaryButtonBorder = primaryButtonBorder, secondaryButtonText = primaryButtonText) : "outlined" === dialog.bannerButtonDesign && (primaryButtonBackground = secondaryButtonBackground, primaryButtonBorder = secondaryButtonBorder, primaryButtonText = secondaryButtonText), dialog.customColors.background = isWhiteTheme ? "#ffffff" : "#141414", dialog.customColors.text = textColor, dialog.customColors.highlight = primaryColor, dialog.customColors.shade = isWhiteTheme ? "#D6D6D6" : "rgba(255, 255, 255, 0.08)", dialog.customColors.acceptBackground = primaryButtonBackground, dialog.customColors.acceptBorder = primaryButtonBorder, dialog.customColors.acceptText = primaryButtonText, dialog.customColors.selectionBackground = secondaryButtonBackground, dialog.customColors.selectionBorder = secondaryButtonBorder, dialog.customColors.selectionText = secondaryButtonText, dialog.customColors.declineBackground = secondaryButtonBackground, dialog.customColors.declineBorder = secondaryButtonBorder, dialog.customColors.declineText = secondaryButtonText, dialog.customColors.scrollbarHandle = isWhiteTheme ? "#141414" : "#e2e2e2"
            }
            newstylesheet = newstylesheet.replace(/#000001/g, dialog.customColors.background).replace(/#000002/g, dialog.customColors.text).replace(/#000003/g, dialog.customColors.highlight).replace(/#000004/g, dialog.customColors.shade).replace(/#000005/g, dialog.customColors.acceptBackground).replace(/#000006/g, dialog.customColors.acceptBorder).replace(/#000008/g, dialog.customColors.acceptText).replace(/#000009/g, dialog.customColors.selectionBackground).replace(/#000010/g, dialog.customColors.selectionBorder).replace(/#000012/g, dialog.customColors.selectionText).replace(/#000013/g, dialog.customColors.declineBackground).replace(/#000014/g, dialog.customColors.declineBorder).replace(/#000015/g, dialog.customColors.declineText).replace(/#000016/g, isDarkTheme ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)").replace(/#000017/g, "#ffffff").replace(/#000020/g, isDarkTheme ? "#ffffff" : dialog.customColors.text).replace(/#000018/g, isDarkTheme ? "#202020" : "#f2f2f2").replace(/#000019/g, isDefaultColorTheme ? dialog.customColors.scrollbarHandle : dialog.customColors.text)
        }
        appendStylesheet(document, newstylesheet)
    };

    function hideElement(element) {
        void 0 !== element && null != element && (element.style.display = "none")
    }

    function getInlineConfiguration(cookieConsent) {
        return cookieConsent.inlineConfiguration && null != cookieConsent.inlineConfiguration && cookieConsent.inlineConfiguration.Frameworks && cookieConsent.inlineConfiguration.Frameworks.IABTCF2
    }

    function getContentNameWithCount(dialog, sectionName, count) {
        return dialog.version === DialogVersion.ElementalCustom ? sectionName : sectionName + "<span class='CybotCookiebotDialogDetailBulkConsentCount'>" + count + "</span>"
    }

    function restrictedList(netList, grossList) {
        var result = [];
        if (netList.length < 0 || grossList.length < 0) return [];
        for (var t = 0; t < netList.length; t++) grossList.indexOf(netList[t]) >= 0 && result.push(netList[t]);
        return result
    }

    function getAllowedLists(inlineConfig, dialog, iabCmp) {
        var allowedPurposes = [],
            allowedSpecialPurposes = [],
            allowedFeatures = [],
            allowedSpecialFeatures = [],
            allowedVendors = [],
            allowedGooglePartners = dialog.googlePartnersSortedIds;
        if (inlineConfig && inlineConfig.AllowedPurposes) allowedPurposes = inlineConfig.AllowedPurposes;
        else
            for (var iabAllowedPurposeIndex in dialog.IABGVL.purposes) allowedPurposes.push(dialog.IABGVL.purposes[iabAllowedPurposeIndex].id);
        if (inlineConfig && inlineConfig.AllowedSpecialPurposes) allowedSpecialPurposes = inlineConfig.AllowedSpecialPurposes;
        else
            for (var iabAllowedSpecialPurposeIndex in dialog.IABGVL.specialPurposes) allowedSpecialPurposes.push(dialog.IABGVL.specialPurposes[iabAllowedSpecialPurposeIndex].id);
        if (inlineConfig && inlineConfig.AllowedFeatures) allowedFeatures = inlineConfig.AllowedFeatures;
        else
            for (var iabAllowedFeatureIndex in dialog.IABGVL.features) allowedFeatures.push(dialog.IABGVL.features[iabAllowedFeatureIndex].id);
        if (inlineConfig && inlineConfig.AllowedSpecialFeatures) allowedSpecialFeatures = inlineConfig.AllowedSpecialFeatures;
        else
            for (var iabAllowedSpecialFeatureIndex in dialog.IABGVL.specialFeatures) allowedSpecialFeatures.push(dialog.IABGVL.specialFeatures[iabAllowedSpecialFeatureIndex].id);
        if (inlineConfig && inlineConfig.AllowedVendors && inlineConfig.AllowedVendors.length > 0) {
            for (var i = 0; i < dialog.IABSortedVendorList.length; i++)
                if (inlineConfig.AllowedVendors.indexOf(dialog.IABSortedVendorList[i]) >= 0) {
                    var allowedIABVendor = dialog.IABGVL.vendors[dialog.IABSortedVendorList[i]];
                    !allowedIABVendor.deletedDate && allowedVendors.push(allowedIABVendor.id)
                }
        } else
            for (var sortedVendorIndex = 0; sortedVendorIndex < dialog.IABSortedVendorList.length; sortedVendorIndex++) {
                var sortedVendorId = dialog.IABSortedVendorList[sortedVendorIndex],
                    sortedVendorObject = dialog.IABGVL.vendors[sortedVendorId];
                !sortedVendorObject.deletedDate && allowedVendors.push(sortedVendorId)
            }
        if (inlineConfig)
            for (var j = 0; j < allowedVendors.length; j++) {
                var allowedVendor = dialog.IABGVL.vendors[allowedVendors[j]];
                if (allowedVendor.specialPurposes && allowedVendor.specialPurposes.length > 0)
                    for (var k = 0; k < allowedVendor.specialPurposes.length; k++) allowedSpecialPurposes.indexOf(allowedVendor.specialPurposes[k]) < 0 && allowedSpecialPurposes.push(allowedVendor.specialPurposes[k]);
                if (allowedVendor.features && allowedVendor.features.length > 0)
                    for (var m = 0; m < allowedVendor.features.length; m++) allowedFeatures.indexOf(allowedVendor.features[m]) < 0 && allowedFeatures.push(allowedVendor.features[m])
            }
        if (inlineConfig && inlineConfig.AllowedGoogleACVendors) {
            if (allowedGooglePartners = [], inlineConfig.AllowedGoogleACVendors.length > 0)
                for (var n = 0; n < dialog.googlePartnersSortedIds.length; n++)
                    if (inlineConfig.AllowedGoogleACVendors.indexOf(dialog.googlePartnersSortedIds[n]) >= 0) {
                        var allowedGoogleACVendor = dialog.googlePartners[dialog.googlePartnersSortedIds[n]];
                        allowedGooglePartners.push(allowedGoogleACVendor.id)
                    }
        } else if ("object" == typeof iabCmp && iabCmp.GACMCommonList) {
            allowedGooglePartners = [];
            for (var o = 0; o < dialog.googlePartnersSortedIds.length; o++)
                if (iabCmp.GACMCommonList.indexOf(dialog.googlePartnersSortedIds[o]) >= 0) {
                    var allowedGooglePartner = dialog.googlePartners[dialog.googlePartnersSortedIds[o]];
                    allowedGooglePartners.push(allowedGooglePartner.id)
                }
        }
        return {
            purposes: allowedPurposes,
            specialPurposes: allowedSpecialPurposes,
            features: allowedFeatures,
            specialFeatures: allowedSpecialFeatures,
            vendors: allowedVendors,
            googlePartners: allowedGooglePartners
        }
    }

    function renderCardListHeader(dialog, sectionName, sectionCount, withSpacing, buttonId) {
        var spacingStyle = withSpacing ? " style='margin-top:12px;border-top:none'" : "",
            headerContent = "<div class='CybotCookiebotDialogBodyLevelButtonIABHeader'" + spacingStyle + ">";
        if (headerContent += getContentNameWithCount(dialog, sectionName, sectionCount), buttonId) {
            var iabHeaderButtonClass = "CybotCookiebotDialogBodyLevelButtonIABHeaderButton",
                iabHeaderButtonSelectId = "CybotCookiebotDialogBodyLevelButtonIABHeaderToggleSelectAll" + buttonId + "Link",
                iabHeaderButtonDeselectId = "CybotCookiebotDialogBodyLevelButtonIABHeaderToggleDeselectAll" + buttonId + "Link";
            headerContent += "<span class='CybotCookiebotDialogBodyLevelButtonIABHeaderToggle'>", headerContent += "<a class='" + iabHeaderButtonClass + " select' id='" + iabHeaderButtonSelectId + "' href='#'>", headerContent += dialog.IABResourceStrings.selectAll + "</a> ", dialog.version === DialogVersion.ElementalCustom && (headerContent += " | "), headerContent += "<a  class='" + iabHeaderButtonClass + " reject' id='" + iabHeaderButtonDeselectId + "' href='#'>", headerContent += dialog.IABResourceStrings.deselectAll + "</a></span>"
        }
        return headerContent += "</div>", headerContent
    }

    function getIabIntroSection(dialog) {
        var legitimateInterestText = dialog.IABResourceStrings.legitimateInterestIntro.replace("<a>", "<a id='CybotCookiebotDialogBodyLevelButtonIABHeaderViewPartnersLink' href='#'>");
        return {
            title: dialog.IABResourceStrings.tabTitle,
            text: dialog.IABResourceStrings.generalIntro,
            legitimateInterestText: legitimateInterestText,
            preferenceText: dialog.IABResourceStrings.preferencesIntro
        }
    }

    function getIabPurposesSection(dialog, allowedLists) {
        var allowedPurposes = allowedLists.purposes,
            allowedSpecialPurposes = allowedLists.specialPurposes,
            purposeContent = "";
        dialog.version === DialogVersion.ElementalCustom && (purposeContent = "<div>", purposeContent += dialog.IABResourceStrings.generalIntro + "<br/><br/>", "custom" === dialog.template ? purposeContent += dialog.IABResourceStrings.legitimateInterestIntro.replace("<a>", "").replace("</a>", "") : purposeContent += dialog.IABResourceStrings.legitimateInterestIntro.replace("<a>", "<a id='CybotCookiebotDialogBodyLevelButtonIABHeaderViewPartnersLink' href='#'>"), purposeContent += "<br/><br/>" + dialog.IABResourceStrings.preferencesIntro + "<br/><br/>", purposeContent += "</div>"), purposeContent += "<div class='CybotCookiebotDialogBodyLevelButtonIABWrapper'>", purposeContent += renderCardListHeader(dialog, dialog.IABResourceStrings.purpose, allowedPurposes.length, !1, "Purposes"), dialog.version === DialogVersion.ElementalCustom && (purposeContent += "<div class='CybotCookiebotDialogBodyIABIntroContainer'>" + dialog.IABResourceStrings.purposeIntro + "</div>");
        for (var p = 0; p < allowedPurposes.length; p++) {
            var currentPurpose = dialog.IABGVL.purposes[allowedPurposes[p]];
            purposeContent += "<div class='CybotCookiebotDialogBodyLevelButtonIABContainer'>", dialog.version === DialogVersion.Swift && (purposeContent += "<div class='CybotCookiebotDialogBodyLevelButtonIABContainerTogglesWrapper'>"), purposeContent += "<div class='CybotCookiebotDialogBodyLevelButtonWrapper'>", purposeContent += "<input type='checkbox' id='CybotCookiebotDialogBodyLevelButtonIABPurpose" + currentPurpose.id + "' data-iabpurposeid='" + currentPurpose.id + "' ", purposeContent += "class='CybotCookiebotDialogBodyLevelButton CybotCookiebotDialogBodyIABButtonPurposes' checked='checked' tabindex='0'>", purposeContent += "<label class='CybotCookiebotDialogBodyLevelButtonIABLabel' for='CybotCookiebotDialogBodyLevelButtonIABPurpose" + currentPurpose.id + "'>", purposeContent += currentPurpose.name + "</label></div>", 1 !== currentPurpose.id && (purposeContent += "<div class='CybotCookiebotDialogBodyLevelButtonWrapper'>", purposeContent += "<input type='checkbox' id='CybotCookiebotDialogBodyLevelButtonIABPurposeLegitimateInterest" + currentPurpose.id + "' ", purposeContent += "data-iabpurposeid='" + currentPurpose.id + "' ", purposeContent += "class='CybotCookiebotDialogBodyLevelButton CybotCookiebotDialogBodyIABButtonPurposesLegitimateInterestSelection' ", purposeContent += "checked='checked' tabindex='0'>", purposeContent += "<label for='CybotCookiebotDialogBodyLevelButtonIABPurposeLegitimateInterest" + currentPurpose.id + "'>", purposeContent += dialog.IABResourceStrings.legitimateInterestHeader + "</label></div>"), dialog.version === DialogVersion.Swift && (purposeContent += "</div>"), purposeContent += "<div class='CybotCookiebotDialogBodyLevelButtonIABDescription'>", purposeContent += currentPurpose.descriptionLegal.replace("* ", "<ul class='CybotCookiebotDialogBodyLevelButtonIABBullet'><li>").replace(/\* /g, "</li><li>") + "</li></ul></div>", purposeContent += "</div>"
        }
        if (purposeContent += "</div>", allowedSpecialPurposes.length > 0) {
            purposeContent += "<div class='CybotCookiebotDialogBodyLevelButtonIABWrapper'>", purposeContent += renderCardListHeader(dialog, dialog.IABResourceStrings.specialPurpose, allowedSpecialPurposes.length, !0, null);
            for (var q = 0; q < allowedSpecialPurposes.length; q++) {
                var currentSpecialPurpose = dialog.IABGVL.specialPurposes[allowedSpecialPurposes[q]];
                purposeContent += "<div class='CybotCookiebotDialogBodyLevelButtonIABContainer'>", purposeContent += "<div class='CybotCookiebotDialogBodyLevelButtonWrapper'>", purposeContent += "<label class='CybotCookiebotDialogBodyLevelButtonIABLabel'>" + currentSpecialPurpose.name + "</label></div>", purposeContent += "<div class='CybotCookiebotDialogBodyLevelButtonIABDescription'>", purposeContent += currentSpecialPurpose.descriptionLegal.replace("* ", "<ul class='CybotCookiebotDialogBodyLevelButtonIABBullet'><li>").replace(/\* /g, "</li><li>") + "</li></ul></div>", purposeContent += "</div>"
            }
            purposeContent += "</div>"
        }
        var purposeIntro = dialog.version === DialogVersion.ElementalCustom ? dialog.IABResourceStrings.generalIntro : dialog.IABResourceStrings.purposeIntro + " " + dialog.IABResourceStrings.legitimateInterestObjection,
            purposeCount = allowedPurposes.length + allowedSpecialPurposes.length;
        return {
            title: getContentNameWithCount(dialog, dialog.IABResourceStrings.purpose, purposeCount),
            text: purposeIntro,
            content: purposeContent
        }
    }

    function getIabFeaturesSection(dialog, allowedLists) {
        var allowedFeatures = allowedLists.features,
            allowedSpecialFeatures = allowedLists.specialFeatures,
            featureContent = "";
        if (allowedFeatures.length > 0) {
            featureContent = "<div class='CybotCookiebotDialogBodyLevelButtonIABWrapper'>", featureContent += renderCardListHeader(dialog, dialog.IABResourceStrings.feature, allowedFeatures.length, !1, null);
            for (var r = 0; r < allowedFeatures.length; r++) {
                var currentFeature = dialog.IABGVL.features[allowedFeatures[r]];
                featureContent += "<div class='CybotCookiebotDialogBodyLevelButtonIABContainer'>", featureContent += "<div class='CybotCookiebotDialogBodyLevelButtonWrapper'>", featureContent += "<label class='CybotCookiebotDialogBodyLevelButtonIABLabel'>" + currentFeature.name + "</label></div>", featureContent += "<div class='CybotCookiebotDialogBodyLevelButtonIABDescription'>", featureContent += currentFeature.descriptionLegal.replace("* ", "<ul class='CybotCookiebotDialogBodyLevelButtonIABBullet'><li>").replace(/\* /g, "</li><li>") + "</li></ul></div>", featureContent += "</div>"
            }
            featureContent += "</div>"
        }
        if (allowedSpecialFeatures.length > 0) {
            featureContent += "<div class='CybotCookiebotDialogBodyLevelButtonIABWrapper'>", featureContent += renderCardListHeader(dialog, dialog.IABResourceStrings.specialFeature, allowedSpecialFeatures.length, !0, "Features");
            for (var s = 0; s < allowedSpecialFeatures.length; s++) {
                var currentSpecialFeature = dialog.IABGVL.specialFeatures[allowedSpecialFeatures[s]];
                featureContent += "<div class='CybotCookiebotDialogBodyLevelButtonIABContainer'>", dialog.version === DialogVersion.Swift && (featureContent += "<div class='CybotCookiebotDialogBodyLevelButtonIABContainerTogglesWrapper'>"), featureContent += "<div class='CybotCookiebotDialogBodyLevelButtonWrapper'>", featureContent += "<input type='checkbox' id='CybotCookiebotDialogBodyLevelButtonIABFeature" + currentSpecialFeature.id + "' ", featureContent += "data-iabspecialfeatureid='" + currentSpecialFeature.id + "' ", featureContent += "class='CybotCookiebotDialogBodyLevelButton CybotCookiebotDialogBodyIABButtonFeatures' ", featureContent += "checked='checked' tabindex='0'><label class='CybotCookiebotDialogBodyLevelButtonIABLabel' ", featureContent += "for='CybotCookiebotDialogBodyLevelButtonIABFeature" + currentSpecialFeature.id + "'>" + currentSpecialFeature.name + "</label></div>", dialog.version === DialogVersion.Swift && (featureContent += "</div>"), featureContent += "<div class='CybotCookiebotDialogBodyLevelButtonIABDescription'>" + currentSpecialFeature.descriptionLegal.replace("* ", "<ul class='CybotCookiebotDialogBodyLevelButtonIABBullet'><li>").replace(/\* /g, "</li><li>") + "</li></ul></div>", featureContent += "</div>"
            }
            featureContent += "</div>"
        }
        var featureCount = allowedFeatures.length + allowedSpecialFeatures.length;
        return {
            title: getContentNameWithCount(dialog, dialog.IABResourceStrings.feature, featureCount),
            text: dialog.IABResourceStrings.featureIntro,
            content: featureContent
        }
    }

    function getIabVendorsSection(dialog, allowedLists) {
        var allowedFeatures = allowedLists.features,
            allowedSpecialFeatures = allowedLists.specialFeatures,
            allowedPurposes = allowedLists.purposes,
            allowedSpecialPurposes = allowedLists.specialPurposes,
            allowedVendors = allowedLists.vendors,
            allowedGooglePartners = allowedLists.googlePartners,
            externalLinkIcon = dialog.version === DialogVersion.Swift ? "<img class='CybotExternalLinkArrow' src=" + dialog.externalLinkIcon + " alt=" + dialog.externalLinkIconAltText + " />" : "",
            vendorIntro = dialog.version === DialogVersion.Swift ? dialog.IABResourceStrings.partnersIntro + " " + dialog.IABResourceStrings.legitimateInterestVendorObjection : "",
            vendorContent = dialog.version === DialogVersion.ElementalCustom ? dialog.IABResourceStrings.partnersIntro + " " + dialog.IABResourceStrings.legitimateInterestVendorObjection : "";
        vendorContent += "<div class='CybotCookiebotDialogBodyLevelButtonIABWrapper'>", vendorContent += "<div class='CybotCookiebotDialogBodyLevelButtonIABHeader' style='margin-top:12px;border-top:none;'>" + getContentNameWithCount(dialog, dialog.IABResourceStrings.thirdPartyVendors, allowedVendors.length) + "<span class='CybotCookiebotDialogBodyLevelButtonIABHeaderToggle'><a class='CybotCookiebotDialogBodyLevelButtonIABHeaderToggleSelectVendorsLink' href='#'>" + dialog.IABResourceStrings.selectAll + "</a> ", dialog.version === DialogVersion.ElementalCustom && (vendorContent += " | "), vendorContent += "<a class='CybotCookiebotDialogBodyLevelButtonIABHeaderToggleDeselectVendorsLink' href='#'>" + dialog.IABResourceStrings.deselectAll + "</a></span></div>";
        for (var u = 0; u < allowedVendors.length; u++) {
            var iABGVLVendor = dialog.IABGVL.vendors[allowedVendors[u]],
                allowedVendorPurposes = restrictedList(iABGVLVendor.purposes, allowedPurposes),
                allowedVendorlegIntPurposes = restrictedList(iABGVLVendor.legIntPurposes, allowedPurposes),
                allowedVendorspecialPurposes = restrictedList(iABGVLVendor.specialPurposes, allowedSpecialPurposes),
                allowedVendorFeatures = restrictedList(iABGVLVendor.features, allowedFeatures),
                allowedVendorSpecialFeatures = restrictedList(iABGVLVendor.specialFeatures, allowedSpecialFeatures),
                ariaExpanded = dialog.version === DialogVersion.Swift ? "aria-expanded='false'" : "";
            if (vendorContent += "<div ", vendorContent += "class='CybotCookiebotDialogBodyLevelButtonIABContainerCollapsed'", vendorContent += "id='CybotCookiebotDialogBodyLevelButtonIABVendorContainer" + iABGVLVendor.id + "'", vendorContent += ariaExpanded, vendorContent += ">", vendorContent += "<a data-iabvendorid='" + iABGVLVendor.id + "' title='" + dialog.IABResourceStrings.expand + "' ", vendorContent += "class='CybotCookiebotDialogBodyLevelButtonIABContainerToggleShow' href='#'></a>", dialog.version === DialogVersion.Swift && (vendorContent += "<div class='CybotCookiebotDialogBodyLevelButtonIABContainerTogglesWrapper'>"), vendorContent += "<div class='CybotCookiebotDialogBodyLevelButtonWrapper'><input type='checkbox' id='CybotCookiebotDialogBodyLevelButtonIABVendor" + iABGVLVendor.id, vendorContent += "' data-iabvendorid='" + iABGVLVendor.id + "' class='CybotCookiebotDialogBodyLevelButton CybotCookiebotDialogBodyIABButtonVendors' ", vendorContent += "checked='checked' tabindex='0'><label class='CybotCookiebotDialogBodyLevelButtonIABLabel' ", vendorContent += "for='CybotCookiebotDialogBodyLevelButtonIABVendor" + iABGVLVendor.id + "'>" + iABGVLVendor.name + "</label></div>", iABGVLVendor.legIntPurposes.length > 0) {
                for (var legIntAllowed = !1, v = 0; v < iABGVLVendor.legIntPurposes.length; v++)
                    if (allowedVendorlegIntPurposes.indexOf(iABGVLVendor.legIntPurposes[v]) >= 0) {
                        legIntAllowed = !0;
                        break
                    }
                legIntAllowed && (vendorContent += "<div class='CybotCookiebotDialogBodyLevelButtonWrapper'><input type='checkbox'", vendorContent += " id='CybotCookiebotDialogBodyLevelButtonIABVendorLegitimateInterest" + iABGVLVendor.id + "' data-iabvendorid='" + iABGVLVendor.id + "'", vendorContent += " class='CybotCookiebotDialogBodyLevelButton CybotCookiebotDialogBodyIABButtonVendorsLegitimateInterestSelection' checked='checked'", vendorContent += " tabindex='0'><label for='CybotCookiebotDialogBodyLevelButtonIABVendorLegitimateInterest" + iABGVLVendor.id + "'>", vendorContent += dialog.IABResourceStrings.legitimateInterestHeader + "</label></div>")
            }
            if (dialog.version === DialogVersion.Swift && (vendorContent += "</div>"), vendorContent += "<div class='CybotCookiebotDialogBodyLevelButtonIABDescription'>" + dialog.IABResourceStrings.policyURL + ":", vendorContent += " <a href='" + iABGVLVendor.policyUrl + "' target='_blank' rel='noopener noreferrer nofollow'>", vendorContent += iABGVLVendor.policyUrl + externalLinkIcon + "</a><br/>", allowedVendorPurposes.length > 0) {
                vendorContent += "<br>" + dialog.IABResourceStrings.purpose + " (" + dialog.IABResourceStrings.consent + "): ", vendorContent += "<ul class='CybotCookiebotDialogBodyLevelButtonIABBullet'>";
                for (var w = 0; w < allowedVendorPurposes.length; w++) vendorContent += "<li>" + dialog.getIAB2PurposeById(allowedVendorPurposes[w]) + "</li>";
                vendorContent += "</ul>"
            }
            if (allowedVendorlegIntPurposes.length > 0) {
                vendorContent += "<br>" + dialog.IABResourceStrings.purpose + " (" + dialog.IABResourceStrings.legitimateInterestHeader + "): ", vendorContent += "<ul class='CybotCookiebotDialogBodyLevelButtonIABBullet'>";
                for (var x = 0; x < allowedVendorlegIntPurposes.length; x++) vendorContent += "<li>" + dialog.getIAB2PurposeById(allowedVendorlegIntPurposes[x]) + "</li>";
                vendorContent += "</ul>"
            }
            if (allowedVendorspecialPurposes.length > 0) {
                vendorContent += "<br>" + dialog.IABResourceStrings.specialPurpose + ": ", vendorContent += "<ul class='CybotCookiebotDialogBodyLevelButtonIABBullet'>";
                for (var y = 0; y < allowedVendorspecialPurposes.length; y++) vendorContent += "<li>" + dialog.getIAB2SpecialPurposeById(allowedVendorspecialPurposes[y]) + "</li>";
                vendorContent += "</ul>"
            }
            if (allowedVendorFeatures.length > 0) {
                vendorContent += "<br>" + dialog.IABResourceStrings.feature + ": ", vendorContent += "<ul class='CybotCookiebotDialogBodyLevelButtonIABBullet'>";
                for (var z = 0; z < allowedVendorFeatures.length; z++) vendorContent += "<li>" + dialog.getIAB2FeatureById(allowedVendorFeatures[z]) + "</li>";
                vendorContent += "</ul>"
            }
            if (allowedVendorSpecialFeatures.length > 0) {
                vendorContent += "<br>" + dialog.IABResourceStrings.specialFeature + ": ", vendorContent += "<ul class='CybotCookiebotDialogBodyLevelButtonIABBullet'>";
                for (var a = 0; a < allowedVendorSpecialFeatures.length; a++) vendorContent += "<li>" + dialog.getIAB2SpecialFeatureById(allowedVendorSpecialFeatures[a]) + "</li>";
                vendorContent += "</ul>"
            }
            var hasMaxAgeSeconds = void 0 !== iABGVLVendor.cookieMaxAgeSeconds && null !== iABGVLVendor.cookieMaxAgeSeconds && -100 !== iABGVLVendor.cookieMaxAgeSeconds,
                hasCookiesAccessData = void 0 !== iABGVLVendor.usesNonCookieAccess && null !== iABGVLVendor.usesNonCookieAccess;
            if (hasMaxAgeSeconds || hasCookiesAccessData || iABGVLVendor.deviceStorageDisclosureUrl) {
                if (vendorContent += "<br>" + dialog.IABResourceStrings.consentHandlingHeader + ": ", vendorContent += "<ul class='CybotCookiebotDialogBodyLevelButtonIABBullet'>", hasMaxAgeSeconds) {
                    var cookieDuration = dialog.CalculateHumanDuration(iABGVLVendor.cookieMaxAgeSeconds, dialog.IABResourceStrings);
                    vendorContent += "<li>" + dialog.IABResourceStrings.consentExpiry + ": " + cookieDuration + "</li>"
                }
                if (iABGVLVendor.cookieRefresh && (vendorContent += "<li>" + dialog.IABResourceStrings.expiryRefreshText + "</li>"), hasCookiesAccessData) {
                    var trackingMethodString = iABGVLVendor.usesNonCookieAccess ? dialog.IABResourceStrings.cookiesAndOther : dialog.IABResourceStrings.cookiesOnly;
                    vendorContent += "<li>" + dialog.IABResourceStrings.trackingType + ": " + trackingMethodString + "</li>"
                }
                iABGVLVendor.deviceStorageDisclosureUrl && (vendorContent += "<li><a class='CybotCookiebotDialogBodyLevelButtonIABShowDetails' data-iabvendorid='" + iABGVLVendor.id + "'", vendorContent += " href='#'>" + dialog.IABResourceStrings.showDetails + "</a></li>", vendorContent += "<div class='CybotCookiebotDialogBodyIABDetails'></div>"), vendorContent += "</ul>"
            }
            vendorContent += "</div></div>"
        }
        if (vendorContent += "</div>", allowedGooglePartners.length > 0) {
            vendorContent += "<div class='CybotCookiebotDialogBodyLevelButtonIABWrapper'>", vendorContent += "<div class='CybotCookiebotDialogBodyLevelButtonIABHeader' style='margin-top:24px;border-top:none;'>", vendorContent += getContentNameWithCount(dialog, dialog.IABResourceStrings.googleHeader, allowedGooglePartners.length) + "</div>", vendorContent += "<div class='CybotCookiebotDialogBodyIABIntroContainer'>" + dialog.IABResourceStrings.googleIntro + "</div>";
            for (var b = 0; b < allowedGooglePartners.length; b++) {
                var currentGooglePartner = dialog.googlePartners[allowedGooglePartners[b]];
                vendorContent += "<div class='CybotCookiebotDialogBodyLevelButtonIABContainerCollapsed CybotCookiebotDialogBodyGACMVendor' ", vendorContent += "id='CybotCookiebotDialogBodyLevelButtonGoogleVendorContainer" + currentGooglePartner.id + "'>", vendorContent += "<a data-googlevendorid='" + currentGooglePartner.id + "' title='" + dialog.IABResourceStrings.expand + "' ", vendorContent += "class='CybotCookiebotDialogBodyLevelButtonIABContainerToggleShow' href='#')'></a>", vendorContent += "<div class='CybotCookiebotDialogBodyLevelButtonWrapper'>", vendorContent += "<input type='checkbox' id='CybotCookiebotDialogBodyLevelButtonGoogleVendor" + currentGooglePartner.id + "' ", vendorContent += "data-googlevendorid='" + currentGooglePartner.id + "' class='CybotCookiebotDialogBodyLevelButton CybotCookiebotDialogBodyIABButtonVendors' ", vendorContent += "checked='checked' tabindex='0'><label class='CybotCookiebotDialogBodyLevelButtonIABLabel' ", vendorContent += "for='CybotCookiebotDialogBodyLevelButtonGoogleVendor" + currentGooglePartner.id + "'>" + currentGooglePartner.name + "</label></div>", vendorContent += "<div class='CybotCookiebotDialogBodyLevelButtonIABDescription'>" + dialog.IABResourceStrings.policyURL + ":", vendorContent += " <a href='" + currentGooglePartner.policyUrl + "' target='_blank' rel='noopener noreferrer nofollow'>", vendorContent += currentGooglePartner.policyUrl + externalLinkIcon + "</a><br/>";
                var GACMAllowedVendorPurposes = [1, 2];
                vendorContent += "<br>" + dialog.IABResourceStrings.purpose + " (" + dialog.IABResourceStrings.consent + "): ", vendorContent += "<ul class='CybotCookiebotDialogBodyLevelButtonIABBullet'>";
                for (var d = 0; d < GACMAllowedVendorPurposes.length; d++) vendorContent += "<li>" + dialog.getIAB2PurposeById(GACMAllowedVendorPurposes[d]) + "</li>";
                vendorContent += "</ul>", vendorContent += "</div></div>"
            }
            vendorContent += "</div>"
        }
        var vendorCount = allowedVendors && allowedVendors.length || 0,
            googlePartnerCount = allowedGooglePartners && allowedGooglePartners.length || 0,
            partnerCount = vendorCount + googlePartnerCount;
        return {
            title: getContentNameWithCount(dialog, dialog.IABResourceStrings.partners, partnerCount),
            text: vendorIntro,
            content: vendorContent
        }
    }

    function getIABData(cookieConsent, iabCmp, dialog) {
        var inlineConfig = getInlineConfiguration(cookieConsent),
            allowedLists = getAllowedLists(inlineConfig, dialog, iabCmp),
            allowedPurposes = allowedLists.purposes,
            allowedSpecialPurposes = allowedLists.specialPurposes,
            allowedFeatures = allowedLists.features,
            allowedSpecialFeatures = allowedLists.specialFeatures;
        return setTimeout((function() {
            if (0 === allowedPurposes.length) {
                var iabPurposesContainer = document.getElementById("CybotCookiebotDialogDetailBodyContentIABv2TabPurposes");
                void 0 !== iabPurposesContainer && null != iabPurposesContainer && (hideElement(iabPurposesContainer.getElementsByClassName("CybotCookiebotDialogBodyLevelButtonIABHeader")[0]), hideElement(iabPurposesContainer.getElementsByClassName("CybotCookiebotDialogBodyIABIntroContainer")[0]), hideElement(iabPurposesContainer.getElementsByClassName("CybotCookiebotDialogBodyLevelButtonIABHeaderToggle")[0])), 0 === allowedSpecialPurposes.length && hideElement(document.getElementById("CybotCookiebotDialogDetailBodyContentIABv2Purposes"))
            }
            0 === allowedSpecialFeatures.length && (hideElement(document.getElementById("CybotCookiebotDialogSpecialFeaturesText")), 0 === allowedFeatures.length && hideElement(document.getElementById("CybotCookiebotDialogDetailBodyContentIABv2Features"))), 0 === allowedPurposes.length && 0 === allowedSpecialPurposes.length && 0 === allowedFeatures.length && 0 === allowedSpecialFeatures.length ? dialog.showCookieContainerIABv2DetailPane("partners") : 0 === allowedPurposes.length && 0 === allowedSpecialPurposes.length && dialog.showCookieContainerIABv2DetailPane("features")
        }), 1), {
            tabHeader: dialog.IABResourceStrings.tabHeader,
            sectionIntro: getIabIntroSection(dialog),
            sectionPurposes: getIabPurposesSection(dialog, allowedLists),
            sectionFeatures: getIabFeaturesSection(dialog, allowedLists),
            sectionVendors: getIabVendorsSection(dialog, allowedLists)
        }
    }

    function onNewTab(document, dialog) {
        for (var scrollAreas = document.querySelectorAll(".CybotCookiebotScrollArea, .CybotCookiebotScrollAreaSide"), i = 0; i < scrollAreas.length; i++) {
            var el = scrollAreas[i],
                eventElement = el.classList.contains("CybotCookiebotScrollAreaSide") ? el.querySelector("ul") : el;
            null !== eventElement.offsetParent && calcFadeState(eventElement, !0, dialog)
        }
    }

    function onHeightTriggerClick(e, document, dialog) {
        e.preventDefault();
        var el = document.querySelector(".CybotCookiebotScrollContainer.CybotCookiebotDialogActive .CybotCookiebotScrollArea");
        calcFadeState(el, !0, dialog)
    }

    function setFaderState(fader, isActive) {
        isActive && fader && !fader.classList.contains("CybotCookiebotDialogActive") ? fader.classList.add("CybotCookiebotDialogActive") : !isActive && fader && fader.classList.contains("CybotCookiebotDialogActive") && fader.classList.remove("CybotCookiebotDialogActive")
    }

    function calcFadeState(element, isFadeDisabled, dialog) {
        var parentNode = element.parentNode,
            isSideDirection = parentNode.classList.contains("CybotCookiebotScrollAreaSide"),
            fader = element.querySelector(".CybotCookiebotFader"),
            faderLeft = parentNode.querySelector(".CybotCookiebotFaderLeft"),
            faderRight = parentNode.querySelector(".CybotCookiebotFaderRight");
        if (isFadeDisabled && (dialog.setVisibility(fader, "hide"), dialog.setVisibility(faderLeft, "hide"), dialog.setVisibility(faderRight, "hide")), isSideDirection) {
            var scrolledToLeft = Math.round(element.scrollLeft) <= 0,
                scrolledToRight = element.scrollWidth - element.clientWidth - Math.round(element.scrollLeft) <= 5;
            setFaderState(faderLeft, !scrolledToLeft), setFaderState(faderRight, !scrolledToRight)
        } else {
            var scrolledToBottom = Math.round(element.scrollTop + 1) >= element.scrollHeight - element.offsetHeight;
            setFaderState(fader, !scrolledToBottom)
        }
        isFadeDisabled && (dialog.setVisibility(fader, "show"), dialog.setVisibility(faderLeft, "show"), dialog.setVisibility(faderRight, "show"))
    }

    function setEventListeners(window, document, dialog) {
        window.addEventListener("resize", (function() {
            onNewTab(document, dialog)
        }), !1);
        for (var scrollElements = document.querySelectorAll(".CybotCookiebotScrollArea, .CybotCookiebotScrollAreaSide ul"), _loop_1 = function(i) {
                var scrollElement = scrollElements[i];
                scrollElements[i].addEventListener("scroll", (function() {
                    calcFadeState(scrollElement, !1, dialog)
                }), !1)
            }, i = 0; i < scrollElements.length; i++) _loop_1(i);
        for (var navItemsArray = [".CybotCookiebotDialogNavItem", "#CybotCookiebotDialogBodyContentTextShowIABVendors", "#CybotCookiebotDialogBodyContentTextToggleDetails", "#CybotCookiebotDialogBodyEdgeMoreDetailsLink"], navItemsClasses = navItemsArray.join(","), navItems = document.querySelectorAll(navItemsClasses), j = 0; j < navItems.length; j++) navItems[j].addEventListener("click", (function() {
            onNewTab(document, dialog)
        }));
        for (var contentHeightTriggerClasesArray = [".CybotCookiebotDialogDetailBodyContentCookieContainerButton", ".CybotCookiebotDialogDetailBodyContentCookieProvider", ".CybotExpandLink", ".CybotCookiebotDialogDetailBodyContentIABv2Tab", "#CybotCookiebotDialogBodyEdgeMoreDetails"], contentHeightTriggersClasses = contentHeightTriggerClasesArray.join(","), contentHeightTriggers = document.querySelectorAll(contentHeightTriggersClasses), k = 0; k < contentHeightTriggers.length; k++) contentHeightTriggers[k].addEventListener("click", (function(e) {
            onHeightTriggerClick(e, document, dialog)
        }), !1)
    }

    function getFaderRgbaValue(hex, opacity) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        if (result) {
            var values = {
                r: parseInt(result[1], 16),
                g: parseInt(result[2], 16),
                b: parseInt(result[3], 16)
            };
            return "rgba(" + values.r + "," + values.g + "," + values.b + ", " + opacity + ")"
        }
        return "rgba(255, 255, 255, 0.8)"
    }

    function setFaderColors(document, dialog) {
        for (var faders = document.getElementsByClassName("CybotCookiebotFader"), rgbTransitionColor = getFaderRgbaValue(dialog.customColors.background, "0.8"), transparentColor = getFaderRgbaValue(dialog.customColors.background, "0"), i = 0; i < faders.length; i++) {
            var currentFader = faders[i],
                direction = "to top";
            currentFader.classList.contains("CybotCookiebotFaderLeft") ? direction = "to right" : currentFader.classList.contains("CybotCookiebotFaderRight") && (direction = "to left"), currentFader.style.backgroundImage = "linear-gradient(" + direction + "," + dialog.customColors.background + "," + rgbTransitionColor + ", " + transparentColor + ")"
        }
    }

    function initContentFader(window, document, dialog) {
        setFaderColors(document, dialog), setEventListeners(window, document, dialog), onNewTab(document, dialog)
    }
    var getTruncatedString = function(value, length) {
        return value.length > length ? value.substring(0, length - 3) + "..." : value
    };
    window.CookieControl.Dialog = function(cookieconsent, mode, title, text, acceptText, declineText, responseMode, ignoreSuppress, demomode, consentLevel, userLanguage, cookieIntroText, cookieIntroTypeNecessary, cookieIntroTypePreference, cookieIntroTypeStatistics, cookieIntroTypeAdvertising, cookieIntroTypeUnclassified, multiAcceptText, loiAllowAllText, loiAllowSelectionText, buttonMode, hideDetailsText, showDetailsText, customizeText) {
        var that = this;
        this.name = "CybotCookiebotDialog", this.mode = mode, this.template = "slidedown", this.theme = "dark", this.title = title, this.text = text, this.logo = null, this.logoAltText = "", this.externalLinkIcon = "", this.externalLinkIconAltText = "", this.acceptText = acceptText, this.declineText = declineText, this.customizeText = customizeText, this.cookieIntroText = cookieIntroText, this.cookieIntroTypeNecessary = cookieIntroTypeNecessary, this.cookieIntroTypePreference = cookieIntroTypePreference, this.cookieIntroTypeStatistics = cookieIntroTypeStatistics, this.cookieIntroTypeAdvertising = cookieIntroTypeAdvertising, this.cookieIntroTypeUnclassified = cookieIntroTypeUnclassified, this.loiAllowAllText = "", this.loiAllowSelectionText = "", this.buttonMode = "ok", this.ooiPersonalInformation = "", this.cookieHeaderTypeNecessary = "", this.cookieHeaderTypePreference = "", this.cookieHeaderTypeStatistics = "", this.cookieHeaderTypeAdvertising = "", this.cookieHeaderTypeUnclassified = "", this.cookieTableHeaderName = "", this.cookieTableHeaderProvider = "", this.cookieTableHeaderPurpose = "", this.cookieTableHeaderType = "", this.cookieTableHeaderExpiry = "", this.showDetailsText = showDetailsText, this.hideDetailsText = hideDetailsText, this.multiAcceptText = multiAcceptText, this.mandatoryText = "", this.noCookiesTypeText = "", this.aboutCookiesText = "", this.consentTitle = "", this.consentSelection = "", this.details = "", this.about = "", this.domainConsent = "", this.domainConsentList = "", this.cookiesOverviewText = "", this.lastUpdatedText = "", this.lastUpdatedDate = null, this.privacyPolicyText = "", this.providerLinkText = "", this.bulkconsentDomainsString = "", this.cookieTableNecessary = "", this.cookieTablePreference = "", this.cookieTableStatistics = "", this.cookieTableAdvertising = "", this.cookieTableUnclassified = "", this.privacyPolicies = [], this.responseMode = responseMode, this.consentLevel = consentLevel, this.impliedConsentOnScroll = !0, this.impliedConsentOnRefresh = !1, this.userLanguage = userLanguage, this.userCountry = "", this.sliderPos = 0, this.faderPos = 100, this.detailsPos = 0, this.flashCount = 0, this.DOM = null, this.DOMid = "CybotCookiebotDialog", this.visible = !1, this.DOMoverlay = null, this.textDirection = "ltr", this.bodyOverflow = null, this.cookieconsent = cookieconsent, this.cookieconsent.dialog = this, this.demomode = demomode, this.viewport = new window.CookieControl.Viewport, this.initHeight = "", this.initWidth = "", this.pageHasLoaded = !1, this.scalefactor = 1, this.isScrolling = !1, this.isInternalAlias = !1, this.showLogo = !0, this.autoHideLogoWidth = 600, this.windowInitScrolltop = 0, this.bodyPaddingTopInit = 0, this.bannerFirstFocusElement = null, this.bannerLastFocusElement = null, this.bannerOpenFocusElement = null, this.templates = {
            top: "",
            bottom: "",
            slidedown: "",
            pushdown: "",
            slideup: "",
            overlay: "",
            popup: "",
            "top-v2": "",
            "bottom-v2": "",
            "slidedown-v2": "",
            "pushdown-v2": "",
            "slideup-v2": "",
            "overlay-v2": "",
            "popup-v2": "",
            custom: ""
        }, this.themes = {
            white: "",
            dark: "",
            customcolor: ""
        }, this.styles = {
            top: "",
            bottom: "",
            slidedown: "",
            pushdown: "",
            slideup: "",
            overlay: "",
            popup: "",
            custom: ""
        }, this.modes = {
            top_white: "",
            top_dark: "",
            top_customcolor: "",
            bottom_white: "",
            bottom_dark: "",
            bottom_customcolor: "",
            slidedown_white: "",
            slidedown_dark: "",
            slidedown_customcolor: "",
            pushdown_white: "",
            pushdown_dark: "",
            pushdown_customcolor: "",
            slideup_white: "",
            slideup_dark: "",
            slideup_customcolor: "",
            overlay_white: "",
            overlay_dark: "",
            overlay_customcolor: "",
            popup_white: "",
            popup_dark: "",
            popup_customcolor: "",
            custom_white: "",
            custom_dark: "",
            custom_customcolor: ""
        }, this.customColors = {
            background: "",
            text: "",
            acceptbutton: "",
            selectionbutton: "",
            declinebutton: "",
            buttontext: "",
            tab: "",
            border: "",
            logo: ""
        }, this.customImages = {
            showdetails: "",
            hidedetails: "",
            cbCheckedNofocus: "",
            cbCheckedFocus: "",
            cbCheckedDisabled: "",
            cbNotCheckedFocus: "",
            cbNotCheckedNoFocus: ""
        }, this.customTemplateDef = {
            HTML: "",
            CSS: "",
            Script: "",
            FunctionShowName: "",
            FunctionHideName: ""
        }, this.prechecked = {
            preferences: !0,
            statistics: !0,
            marketing: !0
        }, this.optionaloptinSettings = {
            displayConsentBanner: !1
        }, this.IABSettings = {
            purposes: [],
            specialpurposes: [],
            features: [],
            specialfeatures: [],
            stacks: [],
            vendors: [],
            version: "",
            lastupdated: ""
        }, this.IABGVL = null, this.IABSortedVendorList = null, this.IABResourceStrings = {
            tabHeader: "",
            deselectAll: "",
            feature: "",
            tabTitle: "",
            generalIntro: "",
            policyURL: "",
            purpose: "",
            purposeIntro: "",
            purposeLegitimateInterest: "",
            selectAll: "",
            thirdPartyVendors: "",
            vendorIntro: "",
            legitimateInterestHeader: "",
            legitimateInterestIntro: "",
            legitimateInterestPurposeIntro: "",
            legitimateInterestObjection: "",
            legitimateInterestVendorObjection: "",
            specialPurpose: "",
            specialFeature: "",
            purposeIntroShort: "",
            purposeIntroLong: "",
            purposeIntroPartly: "",
            globalConsent: "",
            withdrawConsent: "",
            preferencesIntro: "",
            consent: "",
            expand: "",
            collapse: "",
            saveAndExit: "",
            partners: "",
            partnersIntro: "",
            vendorsCan: "",
            settings: "",
            consentHandlingHeader: "",
            consentExpiry: "",
            trackingType: "",
            cookiesAndOther: "",
            cookiesOnly: "",
            showDetails: "",
            name: "",
            domain: "",
            expiry: "",
            expiryRefreshText: "",
            type: "",
            errorText: "",
            loadingText: "",
            trackingTypeCookie: "",
            trackingTypeWeb: "",
            trackingTypeApp: "",
            year: "",
            years: "",
            day: "",
            days: "",
            hour: "",
            hours: "",
            minute: "",
            minutes: "",
            second: "",
            seconds: "",
            session: "",
            googleIntro: "",
            googleHeader: ""
        }, this.googlePartners = {}, this.googlePartnersSortedIds = [], this.bannerCloseButtonEnabled = !1, this.bannerButtonDesign = null, this.bannerCloseText = "", null != loiAllowAllText && (this.loiAllowAllText = loiAllowAllText), null != loiAllowSelectionText && (this.loiAllowSelectionText = loiAllowSelectionText), null != buttonMode && (this.buttonMode = buttonMode)
    }, window.CookieControl.Dialog.prototype.getCookieTableSection = function(domId, cookieList, expiryLabel, typeLabel, textDirection) {
        var cookieGroupCounters = {},
            group;

        function getCookieGroupCounter(provider, count) {
            return cookieGroupCounters[provider] ? cookieGroupCounters[provider] += count : cookieGroupCounters[provider] = count, cookieGroupCounters[provider]
        }
        for (var i = 0; i < cookieList.length; i++) {
            var cookieListItem = cookieList[i],
                providerInfoData = this.getProviderInfo(cookieListItem[7], cookieListItem[1]);
            cookieListItem.push(providerInfoData.providerName, providerInfoData.providerLink, providerInfoData.providerTitle)
        }

        function comparator(a, b) {
            return a[8] < b[8] ? -1 : a[8] > b[8] ? 1 : 0
        }
        cookieList = cookieList.sort(comparator);
        var container = document.createElement("div");
        container.className = "CybotCookiebotDialogDetailBodyContentCookieTabContent";
        var providerName = null,
            providerLink = null,
            providerLinkIcon = null,
            providerInfo = null;
        if (0 === cookieList.length) {
            var categoryEmptyMessage = document.createElement("p");
            categoryEmptyMessage.className = "CybotCookiebotDialogDetailBodyEmptyCategoryMessage", categoryEmptyMessage.innerHTML = this.noCookiesTypeText, container.appendChild(categoryEmptyMessage)
        }
        for (var j = 0; j < cookieList.length; j++) {
            var cookie = cookieList[j],
                cookieName = cookie[0],
                cookieDomain = cookie[1],
                cookiePurpose = cookie[2],
                cookieProvider = cookie[8],
                cookieProviderLink = cookie[9],
                cookieExpiry = "<b>" + expiryLabel + "</b>: " + cookie[3],
                cookieType = "<b>" + typeLabel + "</b>: " + cookie[4],
                cookieProviderCounter, prevCookieProvider = "";
            j > 0 && (prevCookieProvider = cookieList[j - 1][8]), cookieProvider !== prevCookieProvider && (group = document.createElement("div"), group.className = "CybotCookiebotDialogDetailBodyContentCookieGroup", container.appendChild(group), providerName = document.createElement("a"), providerName.classList.add("CybotCookiebotDialogDetailBodyContentCookieProvider"), providerName.setAttribute("role", "button"), providerName.setAttribute("aria-expanded", "false"), providerName.classList.add("CybotCookiebotDialogCollapsed"), providerName.innerHTML = " ", providerName.href = "#", group.appendChild(providerName), cookieProviderCounter = document.createElement("div"), cookieProviderCounter.classList.add("CybotCookiebotDialogDetailBodyContentCookieInfoCount"), cookieProviderCounter.classList.add("CybotCookiebotDialogDetailBulkConsentCount"), providerName.appendChild(cookieProviderCounter), cookieProviderLink ? (providerLink = document.createElement("a"), providerLink.className = "CybotCookiebotDialogDetailBodyContentCookieLink", providerLink.innerHTML = this.providerLinkText, providerLink.target = "_blank", providerLink.href = cookieDomain.split("<br/>")[0], providerLinkIcon = document.createElement("img"), providerLinkIcon.className = "CybotExternalLinkArrow", providerLinkIcon.src = this.externalLinkIcon, providerLinkIcon.alt = this.externalLinkIconAltText, providerLink.appendChild(providerLinkIcon), group.appendChild(providerLink)) : providerLink = null);
            var domainCount = cookieDomain.split("<br/>").length;
            domainCount > 1 && (cookieName += "&nbsp;[x" + domainCount + "]");
            var cookieInfo = document.createElement("div");
            cookieInfo.classList.add("CybotCookiebotDialogDetailBodyContentCookieInfo"), cookieInfo.classList.add("CybotCookiebotDialogHide"), group.appendChild(cookieInfo);
            var cookieProviderName = document.createElement("span");
            cookieProviderName.className = "CybotCookiebotDialogDetailBodyContentCookieInfoTitle", cookieProviderName.innerHTML = cookieName, cookieInfo.appendChild(cookieProviderName);
            var cookieProviderDescription = document.createElement("span");
            cookieProviderDescription.className = "CybotCookiebotDialogDetailBodyContentCookieInfoDescription", cookieProviderDescription.innerHTML = cookiePurpose, cookieInfo.appendChild(cookieProviderDescription);
            var cookieFooter = document.createElement("div");
            cookieFooter.className = "CybotCookiebotDialogDetailBodyContentCookieInfoFooter", cookieInfo.appendChild(cookieFooter);
            var cookieProviderExpiry = document.createElement("span");
            cookieProviderExpiry.className = "CybotCookiebotDialogDetailBodyContentCookieInfoFooterContent", cookieProviderExpiry.innerHTML = cookieExpiry, cookieFooter.appendChild(cookieProviderExpiry);
            var cookieProviderType = document.createElement("span");
            if (cookieProviderType.className = "CybotCookiebotDialogDetailBodyContentCookieInfoFooterContent", cookieProviderType.innerHTML = cookieType, cookieFooter.appendChild(cookieProviderType), providerName) {
                var cookieDomains = cookieList[j][1].split("<br/>");
                if (cookieList[j].length > 10 && (cookieDomains = cookieList[j][7].split("<br/>")), cookieDomains.length > 1) {
                    for (var newList = "", newListHTML = document.createElement("div"), existingCompanies = [], n = 0; n < cookieDomains.length; n++) {
                        var companyName;
                        cookieList[j][8] && (companyName = cookieList[j][8]), -1 === existingCompanies.indexOf(companyName) && (existingCompanies.push(companyName), newList += companyName, n < cookieDomains.length - 1 && (newList += "<br/>"))
                    }
                    newListHTML.innerHTML = newList, providerName.replaceChild(newListHTML, providerName.firstChild), cookieProviderCounter.innerHTML = getCookieGroupCounter(cookieList[j][8], domainCount)
                } else cookieList[j].length > 10 ? cookieList[j][8] && (providerName.firstChild.nodeValue = cookieList[j][8], providerLink && (providerLink.href = cookieList[j][9], providerLink.title = cookieList[j][10]), cookieProviderCounter.innerHTML = getCookieGroupCounter(cookieList[j][8], domainCount)) : (providerInfo = this.getProviderInfo(cookieList[j][1], cookieDomain), providerInfo && (providerName.firstChild.nodeValue = providerInfo.providerName, providerLink && (providerLink.href = providerInfo.providerLink, providerLink.title = providerInfo.providerTitle), cookieProviderCounter.innerHTML = getCookieGroupCounter(cookieList[j][8], domainCount)))
            }
        }
        return container.outerHTML
    }, window.CookieControl.Dialog.prototype.getCookieTableHTML = function(domId, cookieList, tableTemplateHTML, textDirection) {
        var cookieTableContainer = document.createElement("span");
        cookieTableContainer.innerHTML = tableTemplateHTML;
        for (var cookieTable = cookieTableContainer.firstChild, i = 0; i < cookieList.length; i++)
            for (var row = cookieTable.tBodies[0].insertRow(-1), j = 0; j <= 4; j++) {
                var newcell = row.insertCell(j);
                if (newcell.innerHTML = cookieList[i][j], 0 === j) {
                    var domaincount = cookieList[i][1].split("<br/>").length;
                    domaincount > 1 && (newcell.innerHTML += "&nbsp;[x" + domaincount + "]")
                } else if (1 === j) {
                    var cookieDomains = cookieList[i][j].split("<br/>");
                    if (cookieList[i].length > 7 && (cookieDomains = cookieList[i][7].split("<br/>")), cookieDomains.length > 1) {
                        for (var newList = "", existingCompanies = [], k = 0; k < cookieDomains.length; k++) {
                            var companyName = this.getDomainLabel(cookieDomains[k]); - 1 === existingCompanies.indexOf(companyName) && (existingCompanies.push(companyName), newList += companyName, k < cookieDomains.length - 1 && (newList += "<br/>"))
                        }
                        newcell.innerHTML = newList
                    } else cookieList[i].length > 7 ? newcell.innerHTML = this.getDomainLabel(cookieList[i][7]) : newcell.innerHTML = this.getDomainLabel(cookieList[i][j])
                }
                1 !== j && (newcell.title = cookieList[i][j].replace(/\<br\/\>/g, "\n"))
            }
        if (0 === cookieList.length) {
            for (; cookieTable.hasChildNodes();) cookieTable.removeChild(cookieTable.firstChild);
            var noentriesRow = cookieTable.insertRow(0),
                noentriesCell = noentriesRow.insertCell(0);
            noentriesCell.style.textAlignment = textDirection, noentriesCell.innerHTML = this.noCookiesTypeText, noentriesCell.className = "CybotCookiebotDialogDetailBodyContentCookieTypeTableEmpty"
        }
        return cookieTable.id = "CybotCookiebotDialogDetailTable" + domId, cookieTable.className = "CybotCookiebotDialogDetailBodyContentCookieTypeTable", cookieTable.outerHTML
    }, window.CookieControl.Dialog.prototype.initContentFader = function() {
        initContentFader(window, document, this)
    }, window.CookieControl.Dialog.prototype.getProviderInfo = function(providerName, providerLink) {
        var providerTitle = "";
        if (this.privacyPolicies.length > 0)
            for (var i = 0; i < this.privacyPolicies.length; i++)
                if (this.privacyPolicies[i][0] === providerName) {
                    providerName = this.privacyPolicies[i][1], providerLink = this.privacyPolicies[i][2], providerTitle = this.privacyPolicyText.replace("{0}", this.privacyPolicies[i][1]).replace("'", "'");
                    break
                }
        return -1 === providerLink.indexOf("http") && (providerLink = null), {
            providerName: providerName,
            providerLink: providerLink,
            providerTitle: providerTitle
        }
    }, window.CookieControl.Dialog.prototype.getDomainLabel = function(domainname) {
        var label = domainname;
        if (this.privacyPolicies.length > 0)
            for (var i = 0; i < this.privacyPolicies.length; i++)
                if (this.privacyPolicies[i][0] === domainname) {
                    var privacyPolicyName = this.privacyPolicies[i][1],
                        privacyPolicyLink = this.privacyPolicies[i][2],
                        labelTitle = this.privacyPolicyText.replace("{0}", privacyPolicyName).replace("'", "'");
                    label = '<a href="' + privacyPolicyLink + '"', label += ' target="_blank" rel="noopener noreferrer nofollow" title="' + labelTitle + '"', label += ">" + privacyPolicyName + "</a>";
                    break
                }
        return label
    }, window.CookieControl.Dialog.prototype.init = function() {
        -1 !== this.mode.indexOf("v2") ? this.version = 2 : this.version = 1, "function" == typeof window.CookiebotCallback_OnDialogInit ? window.CookiebotCallback_OnDialogInit() : "function" == typeof window.CookieConsentCallback_OnDialogInit && window.CookieConsentCallback_OnDialogInit();
        var event = document.createEvent("Event"),
            dialogHTML;
        event.initEvent("CookiebotOnDialogInit", !0, !0), window.dispatchEvent(event), event = document.createEvent("Event"), event.initEvent("CookieConsentOnDialogInit", !0, !0), window.dispatchEvent(event), this.mode.indexOf("_") > 0 && (this.template = this.mode.split("_")[0], this.theme = this.mode.split("_")[1]), this.clearDOM(), this.demomode ? this.loadDemoTemplates() : this.loadTemplates(), dialogHTML = "custom" === this.template ? this.customTemplateDef.HTML : this.templates[this.template];
        var tempParent = document.createElement("div");
        tempParent.innerHTML = dialogHTML.replace(/\[#TITLE#]/g, this.title).replace(/\[#TEXT#]/g, this.text.replace(/\n/g, "")).replace(/\[#ACCEPT#]/g, this.acceptText).replace(/\[#DECLINE#]/g, this.declineText).replace(/\[#CUSTOMIZE#]/g, this.customizeText).replace(/\[#DETAILS#\]/g, this.showDetailsText).replace(/\[#DETAILSHIDE#\]/g, this.hideDetailsText).replace(/\[#LOGO#]/g, this.logo || "data:,").replace(/\[#LOGOALT#]/g, this.logoAltText).replace(/\[#BANNER_CLOSE#\]/g, this.bannerCloseText), "" !== this.bulkconsentDomainsString ? 2 === this.version ? (tempParent.innerHTML = tempParent.innerHTML.replace(/\[#BULK_CONSENT_DOMAINS#]/g, this.domainlist), tempParent.innerHTML = tempParent.innerHTML.replace(/\[#BULK_CONSENT_DOMAINS_COUNT#]/g, this.domainlistCount), tempParent.innerHTML = tempParent.innerHTML.replace(/\[#BULK_CONSENT_TITLE#]/g, this.bulkconsentDomainsString), tempParent.innerHTML = tempParent.innerHTML.replace(/\[#COOKIESGENERALINTRO#]/g, this.cookieIntroText.replace(/\n/g, "") + "<br><br>").replace(/\[#COOKIETYPEINTRO_NECESSARY#]/g, this.cookieIntroTypeNecessary.replace(/\n/g, "")).replace(/\[#COOKIETYPEINTRO_PREFERENCE#]/g, this.cookieIntroTypePreference.replace(/\n/g, "")).replace(/\[#COOKIETYPEINTRO_STATISTICS#]/g, this.cookieIntroTypeStatistics.replace(/\n/g, "")).replace(/\[#COOKIETYPEINTRO_ADVERTISING#]/g, this.cookieIntroTypeAdvertising.replace(/\n/g, "")).replace(/\[#COOKIETYPEINTRO_UNCLASSIFIED#]/g, this.cookieIntroTypeUnclassified.replace(/\n/g, ""))) : tempParent.innerHTML = tempParent.innerHTML.replace(/\[#COOKIESGENERALINTRO#]/g, this.cookieIntroText.replace(/\n/g, "") + "<br><br>" + this.bulkconsentDomainsString + "<br><br>").replace(/\[#COOKIETYPEINTRO_NECESSARY#]/g, this.cookieIntroTypeNecessary.replace(/\n/g, "")).replace(/\[#COOKIETYPEINTRO_PREFERENCE#]/g, this.cookieIntroTypePreference.replace(/\n/g, "")).replace(/\[#COOKIETYPEINTRO_STATISTICS#]/g, this.cookieIntroTypeStatistics.replace(/\n/g, "")).replace(/\[#COOKIETYPEINTRO_ADVERTISING#]/g, this.cookieIntroTypeAdvertising.replace(/\n/g, "")).replace(/\[#COOKIETYPEINTRO_UNCLASSIFIED#]/g, this.cookieIntroTypeUnclassified.replace(/\n/g, "")) : tempParent.innerHTML = tempParent.innerHTML.replace(/\[#COOKIESGENERALINTRO#]/g, this.cookieIntroText.replace(/\n/g, "")).replace(/\[#COOKIETYPEINTRO_NECESSARY#]/g, this.cookieIntroTypeNecessary.replace(/\n/g, "")).replace(/\[#COOKIETYPEINTRO_PREFERENCE#]/g, this.cookieIntroTypePreference.replace(/\n/g, "")).replace(/\[#COOKIETYPEINTRO_STATISTICS#]/g, this.cookieIntroTypeStatistics.replace(/\n/g, "")).replace(/\[#COOKIETYPEINTRO_ADVERTISING#]/g, this.cookieIntroTypeAdvertising.replace(/\n/g, "")).replace(/\[#COOKIETYPEINTRO_UNCLASSIFIED#]/g, this.cookieIntroTypeUnclassified.replace(/\n/g, ""));
        var lastUpdatedTextLabel = this.lastUpdatedText;
        if (void 0 !== this.userCulture && null != this.userCulture && void 0 !== this.lastUpdatedDate && null != this.lastUpdatedDate) {
            var options = {
                    timeZone: "UTC",
                    dateStyle: "short"
                },
                localizedDateLabel = "",
                updateDateObject = new Date(this.lastUpdatedDate);
            try {
                localizedDateLabel = updateDateObject.toLocaleDateString(this.userCulture, options)
            } catch (e) {
                localizedDateLabel = updateDateObject.toLocaleDateString("en-GB", options)
            }
            lastUpdatedTextLabel = lastUpdatedTextLabel.replace(/\{0\}/g, localizedDateLabel)
        }
        if (tempParent.innerHTML = tempParent.innerHTML.replace(/\[#ABOUTCOOKIES#\]/g, this.aboutCookiesText).replace(/\[#CONSENT#\]/g, this.consentTitle).replace(/\[#DETAILSTITLE#\]/g, this.details).replace(/\[#ABOUT#\]/g, this.about).replace(/\[#DOMAIN_CONSENT#\]/g, this.about).replace(/\[#CONSENT_SELECTION#\]/g, this.consentSelection).replace(/\[#BULK_CONSENT_HEADER#\]/g, this.domainConsent).replace(/\[#BULK_CONSENT_LIST#\]/g, this.domainConsentList).replace(/\[#COOKIESOVERVIEW#\]/g, this.cookiesOverviewText).replace(/\[#LASTUPDATED#\]/g, lastUpdatedTextLabel).replace(/\[#COOKIETYPE_NECESSARY#\]/g, this.cookieHeaderTypeNecessary.replace("{0}", this.cookieTableNecessaryCount)).replace(/\[#COOKIETYPE_NECESSARY_TITLE#\]/g, this.cookieHeaderTypeNecessary.replace("({0})", "")).replace(/\[#COOKIETYPE_NECESSARY_COUNT#\]/g, this.cookieTableNecessaryCount).replace(/\[#COOKIETYPE_PREFERENCE#\]/g, this.cookieHeaderTypePreference.replace("{0}", this.cookieTablePreferenceCount)).replace(/\[#COOKIETYPE_PREFERENCE_TITLE#\]/g, this.cookieHeaderTypePreference.replace("({0})", "")).replace(/\[#COOKIETYPE_PREFERENCE_COUNT#\]/g, this.cookieTablePreferenceCount).replace(/\[#COOKIETYPE_STATISTICS#\]/g, this.cookieHeaderTypeStatistics.replace("{0}", this.cookieTableStatisticsCount)).replace(/\[#COOKIETYPE_STATISTICS_TITLE#\]/g, this.cookieHeaderTypeStatistics.replace("({0})", "")).replace(/\[#COOKIETYPE_STATISTICS_COUNT#\]/g, this.cookieTableStatisticsCount).replace(/\[#COOKIETYPE_ADVERTISING#\]/g, this.cookieHeaderTypeAdvertising.replace("{0}", this.cookieTableAdvertisingCount)).replace(/\[#COOKIETYPE_ADVERTISING_TITLE#\]/g, this.cookieHeaderTypeAdvertising.replace("({0})", "")).replace(/\[#COOKIETYPE_ADVERTISING_COUNT#\]/g, this.cookieTableAdvertisingCount).replace(/\[#COOKIETYPE_UNCLASSIFIED#\]/g, this.cookieHeaderTypeUnclassified.replace("{0}", this.cookieTableUnclassifiedCount)).replace(/\[#COOKIETYPE_UNCLASSIFIED_TITLE#\]/g, this.cookieHeaderTypeUnclassified.replace("({0})", "")).replace(/\[#COOKIETYPE_UNCLASSIFIED_COUNT#\]/g, this.cookieTableUnclassifiedCount), tempParent.innerHTML = tempParent.innerHTML.replace(/\[#COOKIETYPE_NECESSARY_RAW#\]/g, this.cookieHeaderTypeNecessary.replace(" ({0})", "")).replace(/\[#COOKIETYPE_PREFERENCE_RAW#\]/g, this.cookieHeaderTypePreference.replace(" ({0})", "")).replace(/\[#COOKIETYPE_STATISTICS_RAW#\]/g, this.cookieHeaderTypeStatistics.replace(" ({0})", "")).replace(/\[#COOKIETYPE_ADVERTISING_RAW#\]/g, this.cookieHeaderTypeAdvertising.replace(" ({0})", "")).replace(/\[#COOKIETYPE_UNCLASSIFIED_RAW#\]/g, this.cookieHeaderTypeUnclassified.replace(" ({0})", "")), tempParent.innerHTML = tempParent.innerHTML.replace(/\[#ACCEPTOK#\]/g, this.multiAcceptText), tempParent.innerHTML = tempParent.innerHTML.replace(/\[#MULTIACCEPT#\]/g, this.multiAcceptText), tempParent.innerHTML = tempParent.innerHTML.replace(/\[#LANGUAGE#\]/g, this.userLanguage), "" !== this.ooiPersonalInformation && (tempParent.innerHTML = tempParent.innerHTML.replace(/\[#OOI_PERSONAL_INFORMATION#\]/g, this.ooiPersonalInformation)), tempParent.innerHTML = tempParent.innerHTML.replace(/\[#LEVELOPTIN_ALLOWALL#\]/g, this.loiAllowAllText), tempParent.innerHTML = tempParent.innerHTML.replace(/\[#LEVELOPTIN_ALLOW_SELECTION#\]/g, this.loiAllowSelectionText), this.cookieconsent.hasFramework && "iabv2" === this.cookieconsent.framework.toLowerCase() && !this.cookieconsent.frameworkBlocked) {
            var iabContent = getIABData(window.CookieConsent, window.CookieConsentIABCMP, window.CookiebotDialog),
                currentContent = tempParent.innerHTML;
            currentContent = currentContent.replace(/\[#IABV2SETTINGS#\]/g, iabContent.tabHeader).replace(/\[#IABV2_TITLE#\]/g, iabContent.sectionIntro.title).replace(/\[#IABV2_BODY_INTRO#\]/g, iabContent.sectionIntro.text).replace(/\[#IABV2_BODY_LEGITIMATE_INTEREST_INTRO#\]/g, iabContent.sectionIntro.legitimateInterestText).replace(/\[#IABV2_BODY_PREFERENCE_INTRO#\]/g, iabContent.sectionIntro.preferenceText).replace(/\[#IABV2_LABEL_PURPOSES#\]/g, iabContent.sectionPurposes.title).replace(/\[#IABV2_BODY_PURPOSES_INTRO#\]/g, iabContent.sectionPurposes.text).replace(/\[#IABV2_BODY_PURPOSES#\]/g, iabContent.sectionPurposes.content).replace(/\[#IABV2_LABEL_FEATURES#\]/g, iabContent.sectionFeatures.title).replace(/\[#IABV2_BODY_FEATURES_INTRO#\]/g, iabContent.sectionFeatures.text).replace(/\[#IABV2_BODY_FEATURES#\]/g, iabContent.sectionFeatures.content).replace(/\[#IABV2_LABEL_PARTNERS#\]/g, iabContent.sectionVendors.title).replace(/\[#IABV2_BODY_PARTNERS_INTRO#\]/g, iabContent.sectionVendors.text).replace(/\[#IABV2_BODY_PARTNERS#\]/g, iabContent.sectionVendors.content), tempParent.innerHTML = currentContent
        }
        var RTLlanguages = ["ar", "he", "fa", "az", "ur", "pa", "ps", "ug", "yi"],
            isCurrentLanguageRtlLanguage = RTLlanguages.indexOf(this.userLanguage.toLowerCase()) >= 0,
            textAlignment = isCurrentLanguageRtlLanguage ? "right" : "left";
        if (this.textDirection = isCurrentLanguageRtlLanguage ? "rtl" : "ltr", tempParent.innerHTML = tempParent.innerHTML.replace(/\[#TEXTDIRECTION#\]/g, this.textDirection), 1 === this.version) {
            var HTMLTabelTemplate = '<table><thead><tr><th scope="col">' + this.cookieTableHeaderName + '</th><th scope="col">';
            HTMLTabelTemplate += this.cookieTableHeaderProvider + '</th><th scope="col">', HTMLTabelTemplate += this.cookieTableHeaderPurpose + '</th><th scope="col">', HTMLTabelTemplate += this.cookieTableHeaderExpiry + '</th><th scope="col">', HTMLTabelTemplate += this.cookieTableHeaderType + "</th></tr></thead><tbody></tbody></table>", tempParent.innerHTML = tempParent.innerHTML.replace(/\[#COOKIETABLE_NECESSARY#]/g, this.getCookieTableHTML("Necessary", this.cookieTableNecessary, HTMLTabelTemplate, textAlignment)), tempParent.innerHTML = tempParent.innerHTML.replace(/\[#COOKIETABLE_PREFERENCE#]/g, this.getCookieTableHTML("Preference", this.cookieTablePreference, HTMLTabelTemplate, textAlignment)), tempParent.innerHTML = tempParent.innerHTML.replace(/\[#COOKIETABLE_STATISTICS#]/g, this.getCookieTableHTML("Statistics", this.cookieTableStatistics, HTMLTabelTemplate, textAlignment)), tempParent.innerHTML = tempParent.innerHTML.replace(/\[#COOKIETABLE_ADVERTISING#]/g, this.getCookieTableHTML("Advertising", this.cookieTableAdvertising, HTMLTabelTemplate, textAlignment)), tempParent.innerHTML = tempParent.innerHTML.replace(/\[#COOKIETABLE_UNCLASSIFIED#]/g, this.getCookieTableHTML("Unclassified", this.cookieTableUnclassified, HTMLTabelTemplate, textAlignment))
        } else tempParent.innerHTML = tempParent.innerHTML.replace(/\[#COOKIETABLE_NECESSARY#]/g, this.getCookieTableSection("Necessary", this.cookieTableNecessary, this.cookieTableHeaderExpiry, this.cookieTableHeaderType, textAlignment)), tempParent.innerHTML = tempParent.innerHTML.replace(/\[#COOKIETABLE_PREFERENCE#]/g, this.getCookieTableSection("Preference", this.cookieTablePreference, this.cookieTableHeaderExpiry, this.cookieTableHeaderType, textAlignment)), tempParent.innerHTML = tempParent.innerHTML.replace(/\[#COOKIETABLE_STATISTICS#]/g, this.getCookieTableSection("Statistics", this.cookieTableStatistics, this.cookieTableHeaderExpiry, this.cookieTableHeaderType, textAlignment)), tempParent.innerHTML = tempParent.innerHTML.replace(/\[#COOKIETABLE_ADVERTISING#]/g, this.getCookieTableSection("Advertising", this.cookieTableAdvertising, this.cookieTableHeaderExpiry, this.cookieTableHeaderType, textAlignment)), tempParent.innerHTML = tempParent.innerHTML.replace(/\[#COOKIETABLE_UNCLASSIFIED#]/g, this.getCookieTableSection("Unclassified", this.cookieTableUnclassified, this.cookieTableHeaderExpiry, this.cookieTableHeaderType, textAlignment));
        if (this.DOM = tempParent.firstChild, !this.demomode && !this.cookieconsent.hasResponse)
            if ("implied" === this.consentLevel && void 0 === window.CookieDeclaration)
                if ("-2" === this.cookieconsent.consentID) {
                    var impliedReferer = window.location.hostname;
                    this.submitConsent(!0, impliedReferer)
                } else {
                    var c = this.cookieconsent.getCookie(this.cookieconsent.name);
                    if (void 0 === c && this.impliedConsentOnRefresh)
                        if (this.cookieconsent.pathlist.length > 0)
                            for (var f = 0; f < this.cookieconsent.pathlist.length; f++) this.cookieconsent.setCookie("-2", null, this.cookieconsent.pathlist[f]);
                        else this.cookieconsent.setCookie("-2", null, "/");
                    this.impliedConsentOnScroll && this.setOnscrollEvent(), this.show()
                }
        else this.show()
    }, window.CookieControl.Dialog.prototype.detachOnscrollEvent = function() {
        this.isScrolling = !1, this.pageHasLoaded = !1;
        try {
            window.removeEventListener("scroll", this.onscrollfunction, !1)
        } catch (ex) {}
    }, window.CookieControl.Dialog.prototype.setOnscrollEvent = function() {
        window.CookieDialogInitScrollPosition = null, window.addEventListener("scroll", this.onscrollfunction, !1)
    }, window.CookieControl.Dialog.prototype.onscrollfunction = function(e) {
        if ("object" == typeof window.CookieConsentDialog)
            if (window.CookieConsentDialog.isScrolling) {
                e = e || window.event;
                var currentScrollPosition = window.pageYOffset;
                currentScrollPosition !== window.CookieConsentDialog.windowInitScrolltop && window.scrollTo(0, window.CookieConsentDialog.windowInitScrolltop), window.CookieConsentDialog.isScrolling = !1, e.preventDefault && e.preventDefault(), e.returnValue = !1
            } else if (window.CookieConsentDialog.pageHasLoaded && ("complete" === document.readyState || "interactive" === document.readyState)) {
            var currentCookiebotInitScrollPosition = window.pageYOffset;
            if (null == window.CookieDialogInitScrollPosition && (window.CookieDialogInitScrollPosition = currentCookiebotInitScrollPosition), "object" == typeof window.CookieConsent && !window.CookieConsent.hasResponse && window.CookieConsentDialog && !this.demomode && null != window.CookieDialogInitScrollPosition && Math.abs(currentCookiebotInitScrollPosition - window.CookieDialogInitScrollPosition) >= 150) {
                window.CookieDialogInitScrollPosition = null;
                var impliedReferer = window.location.hostname;
                window.CookieConsentDialog.submitConsent(!0, impliedReferer)
            }
        }
    }, window.CookieControl.Dialog.prototype.onKeydownfunction = function(e) {
        if ("object" == typeof window.CookieConsentDialog) {
            var isTabPressed = "Tab" === e.key || 9 === e.keyCode;
            if (!isTabPressed) return;
            if (e.shiftKey) window.CookieConsentDialog.bannerLastFocusElement && document.activeElement === window.CookieConsentDialog.bannerFirstFocusElement && (window.CookieConsentDialog.bannerLastFocusElement.focus(), e.preventDefault());
            else {
                var isLastTabIndex = window.CookieConsentDialog.bannerFirstFocusElement && document.activeElement === window.CookieConsentDialog.bannerLastFocusElement;
                ("CybotCookiebotDialog" === document.activeElement.id || isLastTabIndex) && (window.CookieConsentDialog.bannerFirstFocusElement.focus(), isLastTabIndex && e.preventDefault())
            }
        }
    }, window.CookieControl.Dialog.prototype.show = function() {
        var bodyObj = document.getElementsByTagName("body")[0],
            that = this;
        void 0 !== bodyObj ? that.displaydialog() : setTimeout((function() {
            that.show()
        }), 10)
    }, window.CookieControl.Dialog.prototype.displaydialog = function() {
        this.windowInitScrolltop = window.pageYOffset, this.visible = !0;
        var that = this,
            bodyObj = document.getElementsByTagName("body")[0];
        if (this.DOM.style.display = "none", "undefined" !== this.DOM.id && "" !== this.DOM.id && null !== this.DOM.id ? this.DOMid = this.DOM.id : this.DOM.id = this.DOMid, this.DOM.setAttribute("name", this.DOMid), this.name = this.DOMid, this.clearDOM(), bodyObj.firstChild ? this.DOM = bodyObj.insertBefore(this.DOM, bodyObj.firstChild) : this.DOM = bodyObj.appendChild(this.DOM), this.appendStyle(this.template), 2 === this.version && -1 === this.template.indexOf("overlay") && -1 === this.template.indexOf("popup") && ("pushdown-v2" === this.template && (this.bodyPaddingTopInit = this.TryParseInt(document.body.style.paddingTop.split("px")[0], 0)), window.CookieConsent.dialog.toggleEdgeDetails()), 2 === this.version && "leveloptin" === this.responseMode && this.DOMid) {
            var dom = document.getElementById(this.DOMid);
            dom && dom.classList.add("CybotMultilevel")
        }
        if (this.isInternalAlias) {
            var elChild = document.createElement("div");
            elChild.innerHTML = "TEST", elChild.style.position = "absolute", elChild.style.fontSize = "100px", elChild.style.opacity = "0.25", elChild.style.fontWeight = "bold", elChild.style.overflow = "visible", elChild.style.pointerEvents = "none", elChild.style.height = "0", elChild.style.width = "0", elChild.style.wordWrap = "normal", this.DOM.insertBefore(elChild, this.DOM.firstChild)
        }
        var preventEventBubbling = function(e) {
            that.isScrolling = !0
        };
        if (this.DOM.addEventListener("wheel", preventEventBubbling, !1), this.DOM.addEventListener("scroll", preventEventBubbling, !1), "custom" !== this.template && 1 === this.version) {
            if ("" === this.title && (document.getElementById("CybotCookiebotDialogBodyContentTitle").style.display = "none"), "" === this.text && (document.getElementById("CybotCookiebotDialogBodyContentText").style.display = "none"), !this.showLogo || this.viewport.winWidth() <= this.autoHideLogoWidth)
                if (document.getElementById("CybotCookiebotDialogPoweredbyLink").style.display = "none", "rtl" === this.textDirection) switch ("overlay" === this.template || "popup" === this.template ? (document.getElementById("CybotCookiebotDialogBodyContent").style.paddingRight = "16px", "leveloptin" === this.responseMode ? document.getElementById("CybotCookiebotDialogBodyLevelButtons").style.marginRight = "8px" : document.getElementById("CybotCookiebotDialogBodyButtons").style.paddingRight = "8px") : (document.getElementById("CybotCookiebotDialogBodyContent").style.paddingRight = "8px", "leveloptin" === this.responseMode ? document.getElementById("CybotCookiebotDialogBodyLevelButtons").style.marginRight = "8px" : document.getElementById("CybotCookiebotDialogBodyButtons").style.paddingRight = "0px"), "leveloptin" !== this.responseMode && (document.getElementById("CybotCookiebotDialogBodyButtons").firstChild.style.marginRight = "2px"), this.responseMode) {
                    case "leveloptin":
                    case "optin":
                    case "inlineoptin":
                        document.getElementById("CybotCookiebotDialogBodyButtonAccept").style.marginRight = "2px";
                        break;
                    case "optout":
                    case "optinout":
                        document.getElementById("CybotCookiebotDialogBodyButtonDecline").style.marginRight = "2px"
                } else switch ("overlay" === this.template || "popup" === this.template ? (document.getElementById("CybotCookiebotDialogBodyContent").style.paddingLeft = "16px", "leveloptin" === this.responseMode ? document.getElementById("CybotCookiebotDialogBodyLevelButtons").style.marginLeft = "8px" : document.getElementById("CybotCookiebotDialogBodyButtons").style.paddingLeft = "8px") : (document.getElementById("CybotCookiebotDialogBodyContent").style.paddingLeft = "8px", "leveloptin" === this.responseMode ? document.getElementById("CybotCookiebotDialogBodyLevelButtons").style.marginLeft = "8px" : document.getElementById("CybotCookiebotDialogBodyButtons").style.paddingLeft = "0px"), this.responseMode) {
                    case "leveloptin":
                    case "optin":
                    case "inlineoptin":
                        document.getElementById("CybotCookiebotDialogBodyButtonAccept").style.marginLeft = "2px";
                        break;
                    case "optout":
                    case "optinout":
                        document.getElementById("CybotCookiebotDialogBodyButtonDecline").style.marginLeft = "2px", document.getElementById("CybotCookiebotDialogBodyButtonDecline").style.marginRight = "12px", document.getElementById("CybotCookiebotDialogBodyButtonAccept").style.marginLeft = "2px";
                        break;
                    case "optionaloptin":
                        document.getElementById("CybotCookiebotDialogBodyContentControls").style.paddingLeft = "12px"
                }
            var iab2tab = document.getElementById("CybotCookiebotDialogDetailBodyContentTabsIABv2");
            iab2tab && (iab2tab.style.display = this.cookieconsent.hasFramework && "iabv2" === this.cookieconsent.framework.toLowerCase() && !this.cookieconsent.frameworkBlocked ? "inline-block" : "none"), this.viewport.addResizeEvent((function() {
                that.resize()
            }));
            var optionaloptinControl = document.getElementById("CybotCookiebotDialogBodyContentControls"),
                declineButton, acceptButton, necInlineLabel;
            if (null != optionaloptinControl && (optionaloptinControl.style.display = "none"), "optin" === this.responseMode) declineButton = document.getElementById("CybotCookiebotDialogBodyButtonDecline"), declineButton.style.display = "none";
            else if ("optionaloptin" === this.responseMode) {
                var declineButtonOptionaloptin = document.getElementById("CybotCookiebotDialogBodyButtonDecline");
                declineButtonOptionaloptin.style.display = "none";
                var acceptButtonOptionaloptin = document.getElementById("CybotCookiebotDialogBodyButtonAccept"),
                    multiAcceptButtonOptionaloptin = document.getElementById("CybotCookiebotDialogBodyLevelButtonAccept");
                acceptButtonOptionaloptin.innerHTML = multiAcceptButtonOptionaloptin.innerHTML, optionaloptinControl.style.display = "inline"
            } else if ("optout" === this.responseMode) acceptButton = document.getElementById("CybotCookiebotDialogBodyButtonAccept"), acceptButton.style.display = "none";
            else if ("leveloptin" === this.responseMode) {
                var defaultButtons = document.getElementById("CybotCookiebotDialogBodyButtons");
                defaultButtons.style.display = "none", necInlineLabel = document.getElementById("CybotCookiebotDialogDetailBodyContentCookieContainerNecessary"), necInlineLabel.style.borderTop = "0";
                var levelButtons = document.getElementById("CybotCookiebotDialogBodyLevelWrapper");
                levelButtons.style.display = "block";
                var allowallSelectionButtons = document.getElementById("CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelectionWrapper"),
                    acceptButtons = document.getElementById("CybotCookiebotDialogBodyLevelButtonAcceptWrapper");
                "allowselectdecline" === this.buttonMode || "allowallorselection" === this.buttonMode ? (null != allowallSelectionButtons && (allowallSelectionButtons.style.display = "block"), null != acceptButtons && (acceptButtons.style.display = "none"), declineButton = document.getElementById("CybotCookiebotDialogBodyLevelButtonLevelOptinDeclineAll"), null !== declineButton && (declineButton.style.display = "allowselectdecline" === this.buttonMode ? "" : "none")) : (null != allowallSelectionButtons && (allowallSelectionButtons.style.display = "none"), null != acceptButtons && (acceptButtons.style.display = "block")), setOptionTitles()
            } else if ("inlineoptin" === this.responseMode) {
                declineButton = document.getElementById("CybotCookiebotDialogBodyButtonDecline"), declineButton.style.display = "none", acceptButton = document.getElementById("CybotCookiebotDialogBodyButtonAccept");
                var multiAcceptButton = document.getElementById("CybotCookiebotDialogBodyLevelButtonAccept");
                acceptButton.innerHTML = multiAcceptButton.innerHTML;
                var necCheckBox = document.getElementById("CybotCookiebotDialogBodyLevelButtonNecessary");
                necCheckBox.style.zIndex = 1e4, necCheckBox.style.position = "absolute", necInlineLabel = document.getElementById("CybotCookiebotDialogDetailBodyContentCookieContainerNecessary"), necInlineLabel.title = this.htmlDecode(this.mandatoryText), necInlineLabel.style.paddingTop = "7px", necInlineLabel.style.paddingBottom = "5px", necInlineLabel.style.position = "relative", necInlineLabel.style.zIndex = 1;
                var necLabel = necInlineLabel.firstChild;
                necLabel.htmlFor = necCheckBox.id, necLabel.style.display = "inline-block", necLabel.style.backgroundPositionY = "-1px", necInlineLabel.insertBefore(necCheckBox, necInlineLabel.firstChild), necCheckBox = document.getElementById("CybotCookiebotDialogBodyLevelButtonPreferences"), necCheckBox.style.zIndex = 1e4, necCheckBox.style.position = "absolute", necInlineLabel = document.getElementById("CybotCookiebotDialogDetailBodyContentCookieContainerPreference"), necInlineLabel.style.paddingTop = "7px", necInlineLabel.style.paddingBottom = "5px", necInlineLabel.style.position = "relative", necInlineLabel.style.zIndex = 1, necLabel = necInlineLabel.firstChild, necLabel.htmlFor = necCheckBox.id, necLabel.style.display = "inline-block", necLabel.style.backgroundPositionY = "-1px", necInlineLabel.insertBefore(necCheckBox, necInlineLabel.firstChild), necCheckBox = document.getElementById("CybotCookiebotDialogBodyLevelButtonStatistics"), necCheckBox.style.zIndex = 1e4, necCheckBox.style.position = "absolute", necInlineLabel = document.getElementById("CybotCookiebotDialogDetailBodyContentCookieContainerStatistics"), necInlineLabel.style.paddingTop = "7px", necInlineLabel.style.paddingBottom = "5px", necInlineLabel.style.position = "relative", necInlineLabel.style.zIndex = 1, necLabel = necInlineLabel.firstChild, necLabel.htmlFor = necCheckBox.id, necLabel.style.display = "inline-block", necLabel.style.backgroundPositionY = "-1px", necInlineLabel.insertBefore(necCheckBox, necInlineLabel.firstChild), necCheckBox = document.getElementById("CybotCookiebotDialogBodyLevelButtonMarketing"), necCheckBox.style.zIndex = 1e4, necCheckBox.style.position = "absolute", necInlineLabel = document.getElementById("CybotCookiebotDialogDetailBodyContentCookieContainerAdvertising"), necInlineLabel.style.paddingTop = "7px", necInlineLabel.style.paddingBottom = "5px", necInlineLabel.style.position = "relative", necInlineLabel.style.zIndex = 1, necLabel = necInlineLabel.firstChild, necLabel.htmlFor = necCheckBox.id, necLabel.style.display = "inline-block", necLabel.style.backgroundPositionY = "-1px", necInlineLabel.insertBefore(necCheckBox, necInlineLabel.firstChild), necInlineLabel = document.getElementById("CybotCookiebotDialogDetailBodyContentCookieContainerUnclassified"), necInlineLabel.style.paddingTop = "7px", necInlineLabel.style.paddingBottom = "7px", necInlineLabel.style.borderBottom = "0";
                var cookieTypeTabWrapper = document.getElementById("CybotCookiebotDialogDetailBodyContentCookieContainerTypes");
                cookieTypeTabWrapper.style.backgroundColor = this.customColors.background
            }
        } else if (2 === this.version) {
            var cybotCookiebotDialogPoweredbyImage = document.getElementById("CybotCookiebotDialogPoweredbyImage");
            if (cybotCookiebotDialogPoweredbyImage && (this.showLogo && cybotCookiebotDialogPoweredbyImage.getAttribute("src") || (cybotCookiebotDialogPoweredbyImage.style.display = "none")), !this.bulkconsentDomainsString || !this.domainlist) {
                var bulkConsentContainer = document.getElementById("CybotCookiebotDialogDetailBulkConsent");
                bulkConsentContainer && (bulkConsentContainer.style.display = "none")
            }
            var cybotCookiebotDialogBodyButtonDecline = document.getElementById("CybotCookiebotDialogBodyButtonDecline"),
                cybotCookiebotDialogBodyButtonAccept = document.getElementById("CybotCookiebotDialogBodyButtonAccept"),
                cybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection = document.getElementById("CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection"),
                cybotCookiebotDialogBodyContentControls = document.getElementsByClassName("CybotCookiebotDialogBodyContentControlsWrapper")[0],
                cybotCookiebotDialogBodyLevelWrapper = document.getElementById("CybotCookiebotDialogBodyLevelWrapper");
            if ("leveloptin" === this.responseMode || 2 === this.version && "inlineoptin" === this.responseMode) {
                var isMultiButton = "ok" !== this.buttonMode;
                cybotCookiebotDialogBodyButtonAccept.id = isMultiButton ? "CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll" : "CybotCookiebotDialogBodyLevelButtonAccept"
            }

            function hideDetailsCheckboxes() {
                for (var consentToggles = document.querySelectorAll("#CybotCookiebotDialogTabContentDetails .CybotCookiebotDialogBodyLevelButtonSliderWrapper"), i = 0; i < consentToggles.length; i++) that.setVisibility(consentToggles[i], "hide")
            }
            "optout" === this.responseMode ? (this.setVisibility(cybotCookiebotDialogBodyButtonDecline, "show"), this.setVisibility(cybotCookiebotDialogBodyLevelWrapper, "hide"), hideDetailsCheckboxes()) : "optin" === this.responseMode ? (this.setVisibility(cybotCookiebotDialogBodyButtonAccept, "show"), this.setVisibility(cybotCookiebotDialogBodyLevelWrapper, "hide"), hideDetailsCheckboxes()) : "optinout" === this.responseMode ? (this.setVisibility(cybotCookiebotDialogBodyButtonAccept, "show"), this.setVisibility(cybotCookiebotDialogBodyButtonDecline, "show"), this.setVisibility(cybotCookiebotDialogBodyLevelWrapper, "hide"), hideDetailsCheckboxes()) : "leveloptin" === this.responseMode ? (this.setVisibility(cybotCookiebotDialogBodyButtonAccept, "show"), this.setVisibility(cybotCookiebotDialogBodyLevelWrapper, "show"), "allowselectdecline" === this.buttonMode ? (this.setVisibility(cybotCookiebotDialogBodyButtonDecline, "show"), this.setVisibility(cybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection, "show"), this.setVisibility(cybotCookiebotDialogBodyButtonAccept, "show"), cybotCookiebotDialogBodyButtonAccept.innerHTML = this.loiAllowAllText) : "allowallorselection" === this.buttonMode ? (this.setVisibility(cybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection, "show"), cybotCookiebotDialogBodyButtonAccept.innerHTML = this.loiAllowAllText) : cybotCookiebotDialogBodyButtonAccept.innerHTML = this.multiAcceptText) : "inlineoptin" === this.responseMode ? (cybotCookiebotDialogBodyButtonAccept.innerHTML = this.multiAcceptText, this.setVisibility(cybotCookiebotDialogBodyButtonAccept, "show"), this.setVisibility(cybotCookiebotDialogBodyLevelWrapper, "hide"), 2 === this.version && ("allowselectdecline" === this.buttonMode ? (this.setVisibility(cybotCookiebotDialogBodyButtonDecline, "show"), this.setVisibility(cybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection, "show"), this.setVisibility(cybotCookiebotDialogBodyButtonAccept, "show"), cybotCookiebotDialogBodyButtonAccept.innerHTML = this.loiAllowAllText) : "allowallorselection" === this.buttonMode && (this.setVisibility(cybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection, "show"), cybotCookiebotDialogBodyButtonAccept.innerHTML = this.loiAllowAllText), this.checkCustomizeButtonState())) : "optionaloptin" === this.responseMode && (this.setVisibility(cybotCookiebotDialogBodyButtonAccept, "show"), this.setVisibility(cybotCookiebotDialogBodyContentControls, "show"), this.setVisibility(cybotCookiebotDialogBodyLevelWrapper, "hide"), hideDetailsCheckboxes(), cybotCookiebotDialogBodyButtonAccept.innerHTML = this.multiAcceptText);
            var iab2tabheader = document.getElementById("CybotCookiebotDialogNavItemAdSettings");
            iab2tabheader && this.cookieconsent.hasFramework && "iabv2" === this.cookieconsent.framework.toLowerCase() && !this.cookieconsent.frameworkBlocked && this.setVisibility(iab2tabheader, "show")
        } else this.demomode && (this.DOM.style.zIndex = "100000");
        var isIABEnabled = this.cookieconsent.hasFramework && "iabv2" === this.cookieconsent.framework.toLowerCase() && !this.cookieconsent.frameworkBlocked;
        if ("custom" !== this.template && isIABEnabled) {
            var marketingCheckbox = document.getElementById("CybotCookiebotDialogBodyLevelButtonMarketing"),
                marketingCheckboxInline = document.getElementById("CybotCookiebotDialogBodyLevelButtonMarketingInline");

            function toggleIABSelections() {
                this.checked ? that.IABSelectAll() : that.IABDeselectAll(!0)
            }
            marketingCheckbox && marketingCheckbox.addEventListener("click", toggleIABSelections), marketingCheckboxInline && marketingCheckboxInline.addEventListener("click", toggleIABSelections)
        }
        if (this.demomode || "leveloptin" !== this.responseMode && "inlineoptin" !== this.responseMode && "custom" !== this.template && "optionaloptin" !== this.responseMode) !this.demomode || "leveloptin" !== this.responseMode && "inlineoptin" !== this.responseMode && "custom" !== this.template || (document.getElementById("CybotCookiebotDialogBodyLevelButtonPreferences") && (document.getElementById("CybotCookiebotDialogBodyLevelButtonPreferences").checked = this.prechecked.preferences), document.getElementById("CybotCookiebotDialogBodyLevelButtonStatistics") && (document.getElementById("CybotCookiebotDialogBodyLevelButtonStatistics").checked = this.prechecked.statistics), document.getElementById("CybotCookiebotDialogBodyLevelButtonMarketing") && (document.getElementById("CybotCookiebotDialogBodyLevelButtonMarketing").checked = this.prechecked.marketing, 2 === this.version && (document.getElementById("CybotCookiebotDialogBodyLevelButtonPreferencesInline") && (document.getElementById("CybotCookiebotDialogBodyLevelButtonPreferencesInline").checked = this.prechecked.preferences), document.getElementById("CybotCookiebotDialogBodyLevelButtonStatisticsInline") && (document.getElementById("CybotCookiebotDialogBodyLevelButtonStatisticsInline").checked = this.prechecked.statistics), document.getElementById("CybotCookiebotDialogBodyLevelButtonMarketingInline") && (document.getElementById("CybotCookiebotDialogBodyLevelButtonMarketingInline").checked = this.prechecked.marketing)), this.cookieconsent.hasFramework && "iabv2" === this.cookieconsent.framework.toLowerCase() && !this.cookieconsent.frameworkBlocked && (this.consented || this.declined ? this.consent.marketing ? this.IABSelectAll() : this.IABDeselectAll(!0) : this.prechecked.marketing ? this.IABSelectAll() : this.IABDeselectAll(!0))));
        else {
            var c = this.cookieconsent.getCookie(this.cookieconsent.name),
                piiCheckBox = document.getElementById("CybotCookiebotDialogBodyContentCheckboxPersonalInformation");
            if (void 0 !== c && window.CookieConsent && !window.CookieConsent.isNewVersion)
                if (0 === c.indexOf("{")) {
                    var consentJSON = c.replace(/%2c/g, ",").replace(/'/g, '"').replace(/([{\[,])\s*([a-zA-Z0-9_]+?):/g, '$1"$2":'),
                        consentObject = JSON.parse(consentJSON);
                    document.getElementById("CybotCookiebotDialogBodyLevelButtonPreferences") && (document.getElementById("CybotCookiebotDialogBodyLevelButtonPreferences").checked = consentObject.preferences), document.getElementById("CybotCookiebotDialogBodyLevelButtonStatistics") && (document.getElementById("CybotCookiebotDialogBodyLevelButtonStatistics").checked = consentObject.statistics), document.getElementById("CybotCookiebotDialogBodyLevelButtonMarketing") && (document.getElementById("CybotCookiebotDialogBodyLevelButtonMarketing").checked = consentObject.marketing), 2 === this.version && (document.getElementById("CybotCookiebotDialogBodyLevelButtonPreferencesInline") && (document.getElementById("CybotCookiebotDialogBodyLevelButtonPreferencesInline").checked = consentObject.preferences), document.getElementById("CybotCookiebotDialogBodyLevelButtonStatisticsInline") && (document.getElementById("CybotCookiebotDialogBodyLevelButtonStatisticsInline").checked = consentObject.statistics), document.getElementById("CybotCookiebotDialogBodyLevelButtonMarketingInline") && (document.getElementById("CybotCookiebotDialogBodyLevelButtonMarketingInline").checked = consentObject.marketing)), this.cookieconsent.hasFramework && "iabv2" === this.cookieconsent.framework.toLowerCase() && "object" == typeof window.CookieConsentIABCMP && !this.cookieconsent.frameworkBlocked && window.CookieConsentIABCMP.updateBannerFromConsent(), "optionaloptin" === this.responseMode && piiCheckBox && (piiCheckBox.checked = !consentObject.preferences && !consentObject.statistics && !consentObject.marketing)
                } else "0" === c ? (document.getElementById("CybotCookiebotDialogBodyLevelButtonPreferences") && (document.getElementById("CybotCookiebotDialogBodyLevelButtonPreferences").checked = !1), document.getElementById("CybotCookiebotDialogBodyLevelButtonStatistics") && (document.getElementById("CybotCookiebotDialogBodyLevelButtonStatistics").checked = !1), document.getElementById("CybotCookiebotDialogBodyLevelButtonMarketing") && (document.getElementById("CybotCookiebotDialogBodyLevelButtonMarketing").checked = !1, this.cookieconsent.hasFramework && "iabv2" === this.cookieconsent.framework.toLowerCase() && !this.cookieconsent.frameworkBlocked && this.IABDeselectAll(!0)), 2 === this.version && (document.getElementById("CybotCookiebotDialogBodyLevelButtonPreferencesInline") && (document.getElementById("CybotCookiebotDialogBodyLevelButtonPreferencesInline").checked = !1), document.getElementById("CybotCookiebotDialogBodyLevelButtonStatisticsInline") && (document.getElementById("CybotCookiebotDialogBodyLevelButtonStatisticsInline").checked = !1), document.getElementById("CybotCookiebotDialogBodyLevelButtonMarketingInline") && (document.getElementById("CybotCookiebotDialogBodyLevelButtonMarketingInline").checked = !1))) : "-2" === c && (document.getElementById("CybotCookiebotDialogBodyLevelButtonPreferences") && (document.getElementById("CybotCookiebotDialogBodyLevelButtonPreferences").checked = this.prechecked.preferences), document.getElementById("CybotCookiebotDialogBodyLevelButtonStatistics") && (document.getElementById("CybotCookiebotDialogBodyLevelButtonStatistics").checked = this.prechecked.statistics), document.getElementById("CybotCookiebotDialogBodyLevelButtonMarketing") && (document.getElementById("CybotCookiebotDialogBodyLevelButtonMarketing").checked = this.prechecked.marketing, this.cookieconsent.hasFramework && "iabv2" === this.cookieconsent.framework.toLowerCase() && !this.cookieconsent.frameworkBlocked && (this.consented || this.declined ? this.consent.marketing ? this.IABSelectAll() : this.IABDeselectAll(!0) : this.prechecked.marketing ? this.IABSelectAll() : this.IABDeselectAll(!0))), 2 === this.version && (document.getElementById("CybotCookiebotDialogBodyLevelButtonPreferencesInline") && (document.getElementById("CybotCookiebotDialogBodyLevelButtonPreferencesInline").checked = this.prechecked.preferences), document.getElementById("CybotCookiebotDialogBodyLevelButtonStatisticsInline") && (document.getElementById("CybotCookiebotDialogBodyLevelButtonStatisticsInline").checked = this.prechecked.statistics), document.getElementById("CybotCookiebotDialogBodyLevelButtonMarketingInline") && (document.getElementById("CybotCookiebotDialogBodyLevelButtonMarketingInline").checked = this.prechecked.marketing)));
            else document.getElementById("CybotCookiebotDialogBodyLevelButtonPreferences") && (document.getElementById("CybotCookiebotDialogBodyLevelButtonPreferences").checked = this.prechecked.preferences), document.getElementById("CybotCookiebotDialogBodyLevelButtonStatistics") && (document.getElementById("CybotCookiebotDialogBodyLevelButtonStatistics").checked = this.prechecked.statistics), document.getElementById("CybotCookiebotDialogBodyLevelButtonMarketing") && (document.getElementById("CybotCookiebotDialogBodyLevelButtonMarketing").checked = this.prechecked.marketing, this.cookieconsent.hasFramework && "iabv2" === this.cookieconsent.framework.toLowerCase() && !this.cookieconsent.frameworkBlocked && (this.consented || this.declined ? this.consent.marketing ? this.IABSelectAll() : this.IABDeselectAll(!0) : this.prechecked.marketing ? this.IABSelectAll() : this.IABDeselectAll(!0))), window.CookieConsent && (window.CookieConsent.isNewVersion = !1), 2 === this.version && (document.getElementById("CybotCookiebotDialogBodyLevelButtonPreferencesInline") && (document.getElementById("CybotCookiebotDialogBodyLevelButtonPreferencesInline").checked = this.prechecked.preferences), document.getElementById("CybotCookiebotDialogBodyLevelButtonStatisticsInline") && (document.getElementById("CybotCookiebotDialogBodyLevelButtonStatisticsInline").checked = this.prechecked.statistics), document.getElementById("CybotCookiebotDialogBodyLevelButtonMarketingInline") && (document.getElementById("CybotCookiebotDialogBodyLevelButtonMarketingInline").checked = this.prechecked.marketing));
            "optionaloptin" === this.responseMode && piiCheckBox && this.cookieconsent.hasFramework && "iabv2" === this.cookieconsent.framework.toLowerCase() && !this.cookieconsent.frameworkBlocked && piiCheckBox.addEventListener("click", (function() {
                this.checked ? window.CookieConsent.dialog.IABDeselectAll(!0) : window.CookieConsent.dialog.IABSelectAll()
            }))
        }
        hookupNavEvents(), hookupTabEvents("CybotCookiebotDialogDetailBodyContentIABv2Tab"), hookupCookieEvents("CybotCookiebotDialogDetailBodyContentCookieProvider", "CybotCookiebotDialogDetailBodyContentCookieInfo"), hookupCookieEvents("CybotCookiebotDialogBodyLevelButton CybotCookiebotDialogBodyIABButtonVendors", "CybotCookiebotDialogBodyLevelButtonIABDescription"), hookupTabEvents("CybotCookiebotDialogDetailBodyContentCookieContainerButton"), hookupButtonEvents(), hookupCheckboxEvents(), hookupTabEvents("CybotExpandLink"), handleClickById("CybotCookiebotDialogBodyEdgeMoreDetailsLink", (function(e) {
            e.preventDefault(), window.CookieConsent.dialog.toggleDetails(e), window.removeEventListener("resize", window.Cookiebot.dialog.resize);
            var scrollContainer = document.querySelector(".CybotCookiebotScrollContainer");
            scrollContainer.style.minHeight = null
        })), this.afterToggleStateChange(), 1 === this.version ? this.DOM.style.display = "block" : this.DOM.style.display = "flex", "function" == typeof window.CookiebotCallback_OnDialogDisplay ? window.CookiebotCallback_OnDialogDisplay() : "function" == typeof window.CookieConsentCallback_OnDialogDisplay && window.CookieConsentCallback_OnDialogDisplay();
        var event = document.createEvent("Event");
        if (event.initEvent("CookiebotOnDialogDisplay", !0, !0), window.dispatchEvent(event), event = document.createEvent("Event"), event.initEvent("CookieConsentOnDialogDisplay", !0, !0), window.dispatchEvent(event), 1 === this.version) switch (this.template) {
            case "top":
                this.showAtTop();
                break;
            case "bottom":
                this.showAtBottom();
                break;
            case "slidedown":
                this.slideDown();
                break;
            case "pushdown":
                document.body && document.body.style.paddingTop && (this.bodyPaddingTopInit = this.TryParseInt(document.body.style.paddingTop, 0)), this.pushDown();
                break;
            case "slideup":
                this.DOM.style.paddingBottom = "18px", this.slideUp();
                break;
            case "popup":
            case "overlay":
                this.DOM.style.marginLeft = "0px", this.DOM.style.marginTop = "0px", this.DOM.style.width = "auto", this.DOM.style.height = "auto";
                var DialogHeight = this.DOM.offsetHeight,
                    newTop = Math.round((this.viewport.winHeight() - DialogHeight) / 4);
                newTop < 0 && (newTop = 0), this.DOM.style.marginTop = newTop + "px";
                var DialogWidth = this.DOM.offsetWidth,
                    newLeft = Math.round((this.viewport.winWidth() - DialogWidth) / 2 - 10);
                if (newLeft < 0 && (newLeft = 0), this.DOM.style.marginLeft = newLeft + "px", "overlay" === this.template) {
                    var underlay = document.createElement("div");
                    underlay.id = "CybotCookiebotDialogBodyUnderlay", underlay.style.display = "none", underlay.style.width = "100%", underlay.style.height = "100%";
                    var bodyElement = document.getElementsByTagName("body")[0];
                    bodyElement.appendChild(underlay)
                }
                this.fadeIn();
                break;
            case "custom":
                this.runCustomScript(this.customTemplateDef.FunctionShowName, "show")
        } else {
            var activeTemplate = this.template.split("-")[0];
            if (this.DOM.setAttribute("data-template", activeTemplate), "overlay" === activeTemplate) {
                var overlay = document.createElement("div");
                overlay.id = "CybotCookiebotDialogBodyUnderlay", this.DOM.parentNode.insertBefore(overlay, this.DOM.nextSibling), document.body.style.overflow = "hidden"
            }
        }

        function hookupCheckboxEvents() {
            var checkboxes = document.getElementsByClassName("CybotCookiebotDialogBodyLevelConsentCheckbox");

            function onCheckboxClick(e) {
                var checkboxValue = e.target.checked,
                    target = e.target.getAttribute("data-target");
                if (target) {
                    var elem = document.getElementById(target);
                    elem && (elem.checked = checkboxValue)
                }
                that.afterToggleStateChange()
            }
            for (var i = 0; i < checkboxes.length; i++) checkboxes[i].addEventListener("click", onCheckboxClick, !1)
        }

        function hookupNavEvents() {
            var tabs = document.getElementsByClassName("CybotCookiebotDialogNavItemLink"),
                panels = document.getElementsByClassName("CybotCookiebotDialogTabPanel");

            function onTabClick(e) {
                e.preventDefault();
                for (var i = 0; i < tabs.length; i++) tabs[i].classList.remove("CybotCookiebotDialogActive"), tabs[i].setAttribute("aria-selected", !1);
                for (var j = 0; j < panels.length; j++) {
                    var panel = panels[j];
                    that.setVisibility(panel, "hide"), panel.parentNode.classList.contains("CybotCookiebotScrollContainer") && (that.setVisibility(panel.parentNode, "hide"), panel.parentNode.classList.remove("CybotCookiebotDialogActive"))
                }
                e.currentTarget.classList.add("CybotCookiebotDialogActive"), e.currentTarget.setAttribute("aria-selected", !0);
                var id = e.currentTarget.getAttribute("data-target");
                if (id) {
                    var tab = document.getElementById(id);
                    that.setVisibility(tab, "show"), tab.parentNode.classList.contains("CybotCookiebotScrollContainer") && (that.setVisibility(tab.parentNode, "show"), tab.parentNode.classList.add("CybotCookiebotDialogActive"))
                }
                that.checkCustomizeButtonState()
            }
            for (var k = 0; k < tabs.length; k++) tabs[k].addEventListener("click", onTabClick, !1)
        }

        function hookupTabEvents(className) {
            var els = document.getElementsByClassName(className);

            function onElementClick(e) {
                e.preventDefault(), e.currentTarget.classList.toggle("CybotCookiebotDialogCollapsed");
                var panel = e.currentTarget.getAttribute("data-target");
                if (panel) {
                    var toggleClass = 1 === this.version ? "CybotCookiebotDialogShow" : "CybotCookiebotDialogHide",
                        target = document.getElementById(panel);
                    target.classList.toggle(toggleClass);
                    var isExpanded = null !== target.offsetParent;
                    e.currentTarget.setAttribute("aria-expanded", isExpanded)
                }
            }
            for (var k = 0; k < els.length; k++) els[k].addEventListener("click", onElementClick, !1)
        }

        function hookupCookieEvents(className, targetClassName) {
            var els = document.getElementsByClassName(className);

            function onElementClick(e) {
                var element = e.currentTarget;
                element.classList.toggle("CybotCookiebotDialogCollapsed"), element.parentNode.classList.toggle("open");
                var isExpandButton = element.classList.contains("CybotCookiebotDialogDetailBodyContentCookieProvider"),
                    parentNode = element.parentNode;
                if (parentNode) {
                    var panels = parentNode.getElementsByClassName(targetClassName),
                        btnPanelTriggers = document.getElementsByClassName(className);
                    if (panels)
                        for (var j = 0; j < panels.length; j++) {
                            var panel = panels[j];
                            if (panel.classList.toggle("CybotCookiebotDialogShow"), isExpandButton)
                                for (var isExpanded = null !== panel.offsetParent, b = 0; b < btnPanelTriggers.length; b++) {
                                    var btnPanelTrigger = btnPanelTriggers[b];
                                    btnPanelTrigger.setAttribute("aria-expanded", isExpanded)
                                }
                        }
                }
            }
            for (var k = 0; k < els.length; k++) els[k].addEventListener("click", onElementClick, !1)
        }

        function handleClickById(id, handler) {
            var el = document.getElementById(id);
            if (el) {
                var elHref = el.getAttribute("href");
                if (elHref) {
                    var substring = "javascript:";
                    0 !== elHref.toLowerCase().indexOf(substring) && el.addEventListener("click", (function(e) {
                        handler(e)
                    }))
                }
            }
        }

        function handleClickByClass(id, handler) {
            var els = document.getElementsByClassName(id);
            if (els)
                for (var i = 0; i < els.length; i++) {
                    var elHref = els[i].getAttribute("href");
                    if (elHref) {
                        var substring = "javascript:";
                        0 !== elHref.toLowerCase().indexOf(substring) && els[i].addEventListener("click", (function(e) {
                            handler(e)
                        }))
                    }
                }
        }

        function hookupButtonEvents() {
            var AcceptButton = document.getElementById("CybotCookiebotDialogBodyButtonAccept"),
                DeclineButton = document.getElementById("CybotCookiebotDialogBodyButtonDecline"),
                LevelAcceptButton = document.getElementById("CybotCookiebotDialogBodyLevelButtonAccept"),
                AllowAllButton = document.getElementById("CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll"),
                AllowSelectionButton = document.getElementById("CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection"),
                DeclineAllButton = document.getElementById("CybotCookiebotDialogBodyLevelButtonLevelOptinDeclineAll"),
                CustomizeButton = document.getElementById("CybotCookiebotDialogBodyLevelButtonCustomize"),
                preferencesCheckBox = document.getElementById("CybotCookiebotDialogBodyLevelButtonPreferences"),
                statisticsCheckBox = document.getElementById("CybotCookiebotDialogBodyLevelButtonStatistics"),
                marketingCheckBox = document.getElementById("CybotCookiebotDialogBodyLevelButtonMarketing"),
                isTemplate = "custom" === that.template;
            if (AcceptButton && ("optionaloptin" === that.responseMode ? AcceptButton.addEventListener("click", (function(e) {
                    e.preventDefault();
                    var acceptCookies = !0,
                        doNotSellMyPersonalInformationCheckbox = document.getElementById("CybotCookiebotDialogBodyContentCheckboxPersonalInformation");
                    return doNotSellMyPersonalInformationCheckbox && doNotSellMyPersonalInformationCheckbox.checked && (acceptCookies = !1), acceptCookies ? that.submitConsent(!1) : that.submitDecline(e), !1
                }), !1) : AcceptButton.addEventListener("click", (function(e) {
                    return e.preventDefault(), that.submitConsent(!1), !1
                }), !1), AcceptButton.focus()), LevelAcceptButton && (LevelAcceptButton.addEventListener("click", (function(e) {
                    e.preventDefault(), that.submitConsent(!1)
                }), !1), LevelAcceptButton.focus()), AllowSelectionButton && (AllowSelectionButton.addEventListener("click", (function(e) {
                    e.preventDefault(), that.submitConsent(!1)
                }), !1), AllowSelectionButton.focus()), AllowAllButton && (AllowAllButton.addEventListener("click", (function(e) {
                    e.preventDefault(), preferencesCheckBox && (preferencesCheckBox.checked = !0), statisticsCheckBox && (statisticsCheckBox.checked = !0), marketingCheckBox && (marketingCheckBox.checked = !0), window.CookieConsent.dialog.cookieconsent.hasFramework && "iabv2" === window.CookieConsent.dialog.cookieconsent.framework.toLowerCase() && !window.CookieConsent.dialog.cookieconsent.frameworkBlocked && window.CookieConsent.dialog.IABSelectAll(!0), that.submitConsent(!1)
                }), !1), AllowAllButton.focus()), DeclineButton && (DeclineButton.addEventListener("click", (function(e) {
                    return e.preventDefault(), that.submitDecline(e), !1
                }), !1), DeclineButton.focus()), DeclineAllButton && (DeclineAllButton.addEventListener("click", (function(e) {
                    return e.preventDefault(), that.submitDecline(e), !1
                }), !1), DeclineAllButton.focus()), CustomizeButton && CustomizeButton.addEventListener("click", (function(e) {
                    return e.preventDefault(), that.ShowNavigationTab("CybotCookiebotDialogNavDetails"), !1
                })), "leveloptin" === that.responseMode || "inlineoptin" === that.responseMode) {
                var neceCheckBox = document.getElementById("CybotCookiebotDialogBodyLevelButtonNecessary"),
                    neceCheckBoxInline = document.getElementById("CybotCookiebotDialogBodyLevelButtonNecessaryInline");
                if (neceCheckBox) {
                    var clickTarget = 1 === that.version && "inlineoptin" === that.responseMode ? neceCheckBox.nextElementSibling : neceCheckBox.parentNode;
                    clickTarget && clickTarget.addEventListener("click", (function(e) {
                        alert(that.mandatoryText + " " + that.htmlDecode(that.cookieIntroTypeNecessary))
                    }), !1)
                }
                neceCheckBoxInline && 2 === that.version && neceCheckBoxInline.parentNode.addEventListener("click", (function(e) {
                    alert(that.mandatoryText + " " + that.htmlDecode(that.cookieIntroTypeNecessary))
                }), !1);
                var detailShowHideWrapper = document.getElementById("CybotCookiebotDialogBodyLevelDetailsWrapper");
                detailShowHideWrapper && detailShowHideWrapper.addEventListener("click", (function(e) {
                    return window.CookieConsent.dialog.toggleDetails(), !1
                }), !1), handleClickById("CybotCookiebotDialogBodyLevelDetailsButton", (function(e) {
                    e.preventDefault()
                }))
            }
            if (isTemplate || handleClickById("CybotCookiebotDialogBodyButtonDetails", (function(e) {
                    e.preventDefault(), window.CookieConsent.dialog.toggleDetails()
                })), handleClickById("CybotCookiebotDialogBodyContentTextShowIABVendors", (function(e) {
                    e.preventDefault(), window.CookieConsent.dialog.ShowIABVendors(e)
                })), handleClickById("CybotCookiebotDialogBodyContentTextToggleDetails", (function(e) {
                    e.preventDefault(), window.CookieConsent.dialog.toggleDetails(e)
                })), handleClickById("CybotCookiebotDialogDetailBodyContentTabsOverview", (function(e) {
                    e.preventDefault(), window.CookieConsent.dialog.showDetailPane("overview")
                })), handleClickById("CybotCookiebotDialogDetailBodyContentTabsIABv2", (function(e) {
                    e.preventDefault(), window.CookieConsent.dialog.showDetailPane("iabv2")
                })), handleClickById("CybotCookiebotDialogDetailBodyContentTabsAbout", (function(e) {
                    e.preventDefault(), window.CookieConsent.dialog.showDetailPane("about")
                })), handleClickById("CybotCookiebotDialogDetailBodyContentCookieContainerNecessary", (function(e) {
                    "A" === e.target.tagName && e.preventDefault(), window.CookieConsent.dialog.showCookieContainerDetailPane("necessary")
                })), handleClickById("CybotCookiebotDialogDetailBodyContentCookieContainerPreference", (function(e) {
                    "A" === e.target.tagName && e.preventDefault(), window.CookieConsent.dialog.showCookieContainerDetailPane("preference")
                })), handleClickById("CybotCookiebotDialogDetailBodyContentCookieContainerStatistics", (function(e) {
                    "A" === e.target.tagName && e.preventDefault(), window.CookieConsent.dialog.showCookieContainerDetailPane("statistics")
                })), handleClickById("CybotCookiebotDialogDetailBodyContentCookieContainerAdvertising", (function(e) {
                    "A" === e.target.tagName && e.preventDefault(), window.CookieConsent.dialog.showCookieContainerDetailPane("advertising")
                })), handleClickById("CybotCookiebotDialogDetailBodyContentCookieContainerUnclassified", (function(e) {
                    "A" === e.target.tagName && e.preventDefault(), window.CookieConsent.dialog.showCookieContainerDetailPane("unclassified")
                })), handleClickById("CybotCookiebotDialogDetailBodyContentIABv2Purposes", (function(e) {
                    e.preventDefault(), window.CookieConsent.dialog.showCookieContainerIABv2DetailPane("purposes")
                })), handleClickById("CybotCookiebotDialogDetailBodyContentIABv2Features", (function(e) {
                    e.preventDefault(), window.CookieConsent.dialog.showCookieContainerIABv2DetailPane("features")
                })), handleClickById("CybotCookiebotDialogDetailBodyContentIABv2Partners", (function(e) {
                    e.preventDefault(), window.CookieConsent.dialog.showCookieContainerIABv2DetailPane("partners")
                })), handleClickById("CybotCookiebotDialogBodyLevelButtonIABHeaderToggleSelectAllLink", (function(e) {
                    e.preventDefault(), window.CookieConsent.dialog.IABSelectPurposes()
                })), handleClickById("CybotCookiebotDialogBodyLevelButtonIABHeaderToggleDeselectAllLink", (function(e) {
                    e.preventDefault(), window.CookieConsent.dialog.IABDeselectPurposes()
                })), handleClickById("CybotCookiebotDialogBodyLevelButtonIABHeaderViewPartnersLink", (function(e) {
                    e.preventDefault(), window.CookieConsent.dialog.showCookieContainerIABv2DetailPane("partners")
                })), handleClickById("CybotCookiebotDialogBodyLevelButtonIABHeaderToggleSelectAllPurposesLink", (function(e) {
                    e.preventDefault(), window.CookieConsent.dialog.IABSelectPurposes()
                })), handleClickById("CybotCookiebotDialogBodyLevelButtonIABHeaderToggleDeselectAllPurposesLink", (function(e) {
                    e.preventDefault(), window.CookieConsent.dialog.IABDeselectPurposes()
                })), handleClickById("CybotCookiebotDialogBodyLevelButtonIABHeaderToggleSelectAllFeaturesLink", (function(e) {
                    e.preventDefault(), window.CookieConsent.dialog.IABSelectFeatures()
                })), handleClickById("CybotCookiebotDialogBodyLevelButtonIABHeaderToggleDeselectAllFeaturesLink", (function(e) {
                    e.preventDefault(), window.CookieConsent.dialog.IABDeselectFeatures()
                })), handleClickByClass("CybotCookiebotDialogBodyLevelButtonIABHeaderToggleSelectVendorsLink", (function(e) {
                    e.preventDefault(), window.CookieConsent.dialog.IABSelectVendors()
                })), handleClickByClass("CybotCookiebotDialogBodyLevelButtonIABHeaderToggleDeselectVendorsLink", (function(e) {
                    e.preventDefault(), window.CookieConsent.dialog.IABDeselectVendors()
                })), handleClickByClass("CybotCookiebotDialogBodyLevelButtonIABShowDetails", (function(e) {
                    e.preventDefault(), window.CookieConsent.dialog.IABShowDetailedInformation.bind(window.CookieConsent.dialog)(e.currentTarget || e.srcElement)
                })), that.bannerCloseButtonEnabled && 2 === that.version) {
                that.DOM.classList.add("CybotCloseButtonEnabled");
                for (var buttons = document.querySelectorAll(".CybotCookiebotBannerCloseButton"), n = 0; n < buttons.length; n++) {
                    var button = buttons[n];
                    button.addEventListener("click", (function(e) {
                        that.submitDecline(e)
                    }), !1)
                }
            }
            var els = document.getElementsByClassName("CybotCookiebotDialogBodyLevelButtonIABContainerToggleShow");
            if (els)
                for (var i = 0; i < els.length; i++) ! function(index) {
                    var elIabVendorId = els[index].getAttribute("data-iabvendorid");
                    elIabVendorId && els[index].addEventListener("click", (function(e) {
                        e.preventDefault(), that.IABToggleContainer("CybotCookiebotDialogBodyLevelButtonIABVendorContainer" + elIabVendorId)
                    }));
                    var elGoogleVendorId = els[index].getAttribute("data-googlevendorid");
                    elGoogleVendorId && els[index].addEventListener("click", (function(e) {
                        e.preventDefault(), that.IABToggleContainer("CybotCookiebotDialogBodyLevelButtonGoogleVendorContainer" + elGoogleVendorId)
                    }))
                }(i)
        }

        function setOptionTitles() {
            var optionButNec = document.getElementById("CybotCookiebotDialogBodyLevelButtonNecessary");
            optionButNec && (optionButNec.parentNode.title = that.htmlDecode(that.mandatoryText) + " " + that.htmlDecode(that.cookieIntroTypeNecessary.replace(/<[^>]*>?/gm, "")));
            var optionButPref = document.getElementById("CybotCookiebotDialogBodyLevelButtonPreferences");
            optionButPref && (optionButPref.parentNode.title = that.htmlDecode(that.cookieIntroTypePreference.replace(/<[^>]*>?/gm, "")));
            var optionButStat = document.getElementById("CybotCookiebotDialogBodyLevelButtonStatistics");
            optionButStat && (optionButStat.parentNode.title = that.htmlDecode(that.cookieIntroTypeStatistics.replace(/<[^>]*>?/gm, "")));
            var optionButAdve = document.getElementById("CybotCookiebotDialogBodyLevelButtonMarketing");
            optionButAdve && (optionButAdve.parentNode.title = that.htmlDecode(that.cookieIntroTypeAdvertising.replace(/<[^>]*>?/gm, "")))
        }
        2 === this.version && (this.bannerOpenFocusElement = document.activeElement, this.updateVisibleFocusableElements(), this.trapBannerFocus()), 2 === this.version && "pushdown-v2" === this.template && (window.matchMedia("(min-width: 1280px)").matches && this.pushDown(), document.body && window.addEventListener("resize", (function() {
            var paddingTop = parseInt(document.body.style.paddingTop.split("px")[0]),
                dialogHeight = parseInt(window.CookieConsent.dialog.DOM.offsetHeight);
            window.matchMedia("(min-width: 1280px)").matches ? document.body.style.paddingTop = dialogHeight + window.CookieConsent.dialog.bodyPaddingTopInit + "px" : paddingTop > 0 && (document.body.style.paddingTop = null)
        }))), setTimeout((function() {
            that.setButtonsSize(), that.setZoomLevel()
        }), 50), 2 === this.version && (this.initContentFader(), this.DOM.classList.add("CybotCookiebotDialogActive"), -1 === this.template.indexOf("overlay") && -1 === this.template.indexOf("popup") && "leveloptin" === this.responseMode && (this.resize(), window.addEventListener("resize", this.resize)))
    }, window.CookieControl.Dialog.prototype.getVisibleFocusableElements = function() {
        this.DOM.id ? this.DOMid = this.DOM.id : this.DOM.id = this.DOMid;
        var focusableArray = [],
            dialogContainer = document.getElementById(this.DOMid);
        if (dialogContainer)
            for (var focusableEls = dialogContainer.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), input[type="checkbox"]:not([disabled])'), i = 0; i < focusableEls.length; i++) null !== focusableEls[i].offsetParent && focusableArray.push(focusableEls[i]);
        return focusableArray
    }, window.CookieControl.Dialog.prototype.updateVisibleFocusableElements = function(setFocus) {
        if (!this.demomode && "custom" !== this.template) {
            var focusableEls = this.getVisibleFocusableElements();
            focusableEls.length > 0 && (this.bannerFirstFocusElement = focusableEls[0], this.bannerLastFocusElement = focusableEls[focusableEls.length - 1], null != this.bannerFirstFocusElement && setFocus && focusableEls[1].focus())
        }
    }, window.CookieControl.Dialog.prototype.trapBannerFocus = function() {
        if (!this.demomode && "custom" !== this.template) {
            var dialogContainer = document.getElementById(this.DOMid);
            dialogContainer && dialogContainer.addEventListener("keydown", this.onKeydownfunction, !1)
        }
    }, window.CookieControl.Dialog.prototype.releaseBannerFocus = function() {
        if (!this.demomode && "custom" !== this.template) {
            var dialogContainer = document.getElementById(this.DOMid);
            dialogContainer && dialogContainer.removeEventListener("keydown", this.onKeydownfunction), this.bannerOpenFocusElement && (this.bannerOpenFocusElement.focus(), this.bannerOpenFocusElement = null, this.bannerLastFocusElement = null)
        }
    }, window.CookieControl.Dialog.prototype.runCustomScript = function(funcName, txt) {
        this.createCustomScript();
        try {
            var fn = new Function("return " + funcName)();
            "function" == typeof fn && fn()
        } catch (_) {
            console.log("Custom cookie banner %s function not found: %s - please check your custom script.", txt, funcName)
        }
    }, window.CookieControl.Dialog.prototype.createCustomScript = function() {
        if (!this.customScriptInitialized) {
            this.customScriptInitialized = !0;
            var src = this.customTemplateDef.Script;
            if (void 0 !== src && "" !== src)
                if (window.execScript) window.execScript(src);
                else {
                    var s = document.createElement("script");
                    s.type = "text/javascript", s.id = "CookiebotCustomScript";
                    try {
                        s.appendChild(document.createTextNode(src)), document.body.appendChild(s)
                    } catch (e) {
                        s.text = src, document.body.appendChild(s)
                    }
                }
        }
    }, window.CookieControl.Dialog.prototype.TryParseInt = function(str, defaultValue) {
        var retValue = defaultValue;
        return null !== str && str.length > 0 && (isNaN(str) || (retValue = parseInt(str))), retValue
    }, window.CookieControl.Dialog.prototype.resetZoomLevel = function() {
        if (1 === this.version) {
            var contentElement = this.DOM,
                supportsTransforms = "webkitTransform" in document.body.style || "MozTransform" in document.body.style || "msTransform" in document.body.style || "OTransform" in document.body.style || "transform" in document.body.style;
            null != contentElement && "custom" !== this.template && supportsTransforms && (contentElement.style.transform = "", contentElement.style.webkitTransform = "", contentElement.style.msTransform = "", contentElement.style.MozTransform = "", contentElement.style.OTransform = "", contentElement.style.transformOrigin = "", contentElement.style.webkitTransformOrigin = "", contentElement.style.msTransformOrigin = "", contentElement.style.MozTransformOrigin = "", contentElement.style.OTransformOrigin = "")
        }
    }, window.CookieControl.Dialog.prototype.setZoomLevel = function() {
        if (1 === this.version) {
            var scalefactor = 1,
                scalefactorX = 1,
                scalefactorY = 1,
                contentElement = this.DOM,
                supportsTransforms = "webkitTransform" in document.body.style || "MozTransform" in document.body.style || "msTransform" in document.body.style || "OTransform" in document.body.style || "transform" in document.body.style;
            if (null != contentElement && "custom" !== this.template && supportsTransforms) {
                this.resetZoomLevel(), contentElement.style.width = this.initWidth, contentElement.style.height = this.initHeight;
                var DialogHeight = contentElement.scrollHeight,
                    DialogWidth = contentElement.scrollWidth;
                "overlay" !== this.template && "popup" !== this.template || (DialogHeight += 36, DialogWidth += 36);
                var ViewportHeight = this.viewport.winHeight(),
                    ViewportWidth = this.viewport.winWidth();
                if ((DialogHeight > ViewportHeight || DialogWidth > ViewportWidth) && (scalefactorX = ViewportWidth / (DialogWidth + 0), scalefactorY = ViewportHeight / (DialogHeight + 0), scalefactor = Math.round(100 * Math.min(scalefactorY, scalefactorX)) / 100, scalefactorX > .1)) {
                    switch (this.template) {
                        case "top":
                        case "slidedown":
                        case "pushdown":
                            contentElement.style.transform = "scale(" + scalefactor + ")", contentElement.style.webkitTransform = "scale(" + scalefactor + ")", contentElement.style.msTransform = "scale(" + scalefactor + ")", contentElement.style.MozTransform = "scale(" + scalefactor + ")", contentElement.style.OTransform = "scale(" + scalefactor + ")", contentElement.style.transformOrigin = "0 0", contentElement.style.webkitTransformOrigin = "0 0", contentElement.style.msTransformOrigin = "0 0", contentElement.style.MozTransformOrigin = "0 0", contentElement.style.OTransformOrigin = "0 0", contentElement.style.width = Math.floor(ViewportWidth * (1 / scalefactor)) + "px", "pushdown" === this.template && document.body && (document.body.style.paddingTop = this.bodyPaddingTopInit + Math.floor(parseInt(this.DOM.offsetHeight) * scalefactor) + "px");
                            break;
                        case "bottom":
                        case "slideup":
                            contentElement.style.transform = "scale(" + scalefactor + ")", contentElement.style.webkitTransform = "scale(" + scalefactor + ")", contentElement.style.msTransform = "scale(" + scalefactor + ")", contentElement.style.MozTransform = "scale(" + scalefactor + ")", contentElement.style.OTransform = "scale(" + scalefactor + ")", contentElement.style.transformOrigin = "0px bottom", contentElement.style.webkitTransformOrigin = "0px bottom", contentElement.style.msTransformOrigin = "0px bottom", contentElement.style.MozTransformOrigin = "0px bottom", contentElement.style.OTransformOrigin = "0px bottom", contentElement.style.width = Math.floor(ViewportWidth * (1 / scalefactor)) + "px";
                            break;
                        case "overlay":
                        case "popup":
                            this.DOM.style.marginTop = "0", scalefactor = Math.round(100 * Math.min(ViewportHeight / (DialogHeight + 0), ViewportWidth / (DialogWidth + 0))) / 100, this.DOM.style.transform = "scale(" + scalefactor + ")", this.DOM.style.webkitTransform = "scale(" + scalefactor + ")", this.DOM.style.msTransform = "scale(" + scalefactor + ")", this.DOM.style.MozTransform = "scale(" + scalefactor + ")", this.DOM.style.OTransform = "scale(" + scalefactor + ")";
                            var transformOriginX = "center",
                                transformOriginY = "top";
                            DialogWidth > ViewportWidth && (transformOriginX = "0"), DialogHeight > ViewportHeight && (transformOriginY = "0"), this.DOM.style.transformOrigin = transformOriginX + " " + transformOriginY, this.DOM.style.webkitTransformOrigin = transformOriginX + " " + transformOriginY, this.DOM.style.msTransformOrigin = transformOriginX + " " + transformOriginY, this.DOM.style.MozTransformOrigin = transformOriginX + " " + transformOriginY, this.DOM.style.OTransformOrigin = transformOriginX + " " + transformOriginY
                    }
                    this.scalefactor = scalefactor
                }
            }
        }
    }, window.CookieControl.Dialog.prototype.setButtonsSize = function() {
        function setSidePadding(element, padding) {
            element.style.paddingLeft = padding, element.style.paddingRight = padding
        }
        if ("custom" !== this.template && 1 === this.version) {
            var AcceptButton = document.getElementById("CybotCookiebotDialogBodyButtonAccept"),
                DeclineButton = document.getElementById("CybotCookiebotDialogBodyButtonDecline"),
                buttonWidth = 0;
            switch (this.responseMode) {
                case "optin":
                case "optionaloptin":
                case "inlineoptin":
                    AcceptButton && setSidePadding(AcceptButton, "12px");
                    break;
                case "optout":
                    DeclineButton && (DeclineButton.style.paddingLeft = "12px", DeclineButton.style.paddingRight = "12px");
                    break;
                case "optinout":
                    if (AcceptButton && DeclineButton) {
                        var AcceptButtonWidth = AcceptButton.offsetWidth - 10,
                            DeclineButtonWidth = DeclineButton.offsetWidth - 10;
                        buttonWidth = Math.max(AcceptButtonWidth, DeclineButtonWidth), buttonWidth = Math.max(80, buttonWidth), buttonWidth > 0 && (AcceptButton.style.width = buttonWidth + "px", DeclineButton.style.width = buttonWidth + "px")
                    }
                    break;
                case "leveloptin":
                    var MultiAcceptButton = document.getElementById("CybotCookiebotDialogBodyLevelButtonAccept"),
                        MultiDialogWrapper = document.getElementById("CybotCookiebotDialogBodyLevelWrapper"),
                        MultiDialogSelector = document.getElementById("CybotCookiebotDialogBodyLevelButtonsRow"),
                        multiDialogWidth = MultiDialogSelector && MultiDialogWrapper.offsetWidth,
                        multiMargin = MultiDialogSelector && 8,
                        inPopupMode = !1,
                        newMargin = 0,
                        AllowAllButtonWidth, AllowSelectionButtonWidth, levelButtonsTableWidth;
                    if (MultiDialogSelector) {
                        document.getElementById("CybotCookiebotDialogBodyLevelButtonsTable").style.width = "auto";
                        var multiButtonWidth = MultiAcceptButton.offsetWidth,
                            multiSelectorWidth = MultiDialogSelector.offsetWidth,
                            multiSpace = multiMargin + 4;
                        "overlay" !== this.template && "popup" !== this.template || (inPopupMode = !0, multiMargin = 24, multiSpace = 28);
                        var scaleLevelButtonsTableToFullWidth = multiSelectorWidth + multiButtonWidth + multiSpace > multiDialogWidth;
                        if (scaleLevelButtonsTableToFullWidth) document.getElementById("CybotCookiebotDialogBodyLevelButtonsTable").style.width = multiDialogWidth - multiMargin + "px";
                        else if (document.getElementById("CybotCookiebotDialogBodyLevelButtonsTable").style.width = "auto", "rtl" === this.textDirection ? document.getElementById("CybotCookiebotDialogBodyLevelButtons").style.float = "right" : document.getElementById("CybotCookiebotDialogBodyLevelButtons").style.float = "left", document.getElementById("CybotCookiebotDialogBodyLevelButtons").style.pointerEvents = "auto", !inPopupMode) {
                            var bodyTextContainer = document.getElementById("CybotCookiebotDialogBodyContentText");
                            if (bodyTextContainer) {
                                var bodyTextContainerWidth = bodyTextContainer.offsetWidth,
                                    LevelButtonsPanel = document.getElementById("CybotCookiebotDialogBodyLevelButtons");
                                LevelButtonsPanel && (multiSelectorWidth + multiButtonWidth + 4 <= bodyTextContainerWidth ? (newMargin = document.getElementById("CybotCookiebotDialogBodyContent").offsetWidth - bodyTextContainerWidth - 2, (!this.showLogo || this.viewport.winWidth() <= this.autoHideLogoWidth) && (newMargin += 2), "rtl" === this.textDirection ? (LevelButtonsPanel.style.marginLeft = "0px", LevelButtonsPanel.style.marginRight = newMargin + "px") : (LevelButtonsPanel.style.marginLeft = newMargin + "px", LevelButtonsPanel.style.marginRight = "0px")) : "rtl" === this.textDirection ? (LevelButtonsPanel.style.marginLeft = "0px", LevelButtonsPanel.style.marginRight = "8px") : (LevelButtonsPanel.style.marginLeft = "8px", LevelButtonsPanel.style.marginRight = "0px"))
                            }
                        }
                    }
                    var AllowAllButton = document.getElementById("CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll"),
                        AllowSelectionButton = document.getElementById("CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection"),
                        DeclineAllButton = document.getElementById("CybotCookiebotDialogBodyLevelButtonLevelOptinDeclineAll"),
                        allowAllAndAllowSelectionButtonsExist = AllowAllButton && AllowSelectionButton,
                        handleAllowAllOrSelectionButtons = "allowallorselection" === this.buttonMode && allowAllAndAllowSelectionButtonsExist,
                        declineAllAndAllowAllAndAllowSelectionButtonsExist = AllowAllButton && AllowSelectionButton && DeclineAllButton,
                        handleDeclineAllAndAllowAllOrSelectionButtons = "allowselectdecline" === this.buttonMode && declineAllAndAllowAllAndAllowSelectionButtonsExist;
                    if (handleAllowAllOrSelectionButtons) AllowAllButtonWidth = AllowAllButton.offsetWidth - 10, AllowSelectionButtonWidth = AllowSelectionButton.offsetWidth - 10, buttonWidth = Math.max(AllowAllButtonWidth, AllowSelectionButtonWidth), buttonWidth = Math.max(80, buttonWidth), buttonWidth > 0 && (AllowAllButton.style.width = buttonWidth + "px", AllowSelectionButton.style.width = buttonWidth + "px"), levelButtonsTableWidth = inPopupMode ? multiDialogWidth - multiMargin : multiDialogWidth - newMargin, document.getElementById("CybotCookiebotDialogBodyLevelButtonsTable").style.width = levelButtonsTableWidth + "px";
                    else if (handleDeclineAllAndAllowAllOrSelectionButtons) {
                        AllowAllButtonWidth = AllowAllButton.offsetWidth - 10, AllowSelectionButtonWidth = AllowSelectionButton.offsetWidth - 10;
                        var DeclineAllButtonWidth = DeclineAllButton.offsetWidth - 10;
                        buttonWidth = Math.max(80, AllowAllButtonWidth, AllowSelectionButtonWidth, DeclineAllButtonWidth), buttonWidth > 0 && (AllowAllButton.style.width = buttonWidth + "px", AllowSelectionButton.style.width = buttonWidth + "px", DeclineAllButton.style.width = buttonWidth + "px"), levelButtonsTableWidth = inPopupMode ? multiDialogWidth - multiMargin : multiDialogWidth - newMargin, document.getElementById("CybotCookiebotDialogBodyLevelButtonsTable").style.width = levelButtonsTableWidth + "px";
                        var wrapper = document.getElementById("CybotCookiebotDialogBodyLevelWrapper"),
                            wrapperWidth = wrapper.offsetWidth - 2,
                            buttonsWidth = 3 * (22 + buttonWidth);

                        function rearrangeButtons(buttons, display) {
                            for (var i = 0; i < buttons.length; i++) buttons[i].style.display = display, buttons[i].parentElement.appendChild(buttons[i])
                        }
                        wrapperWidth < buttonsWidth ? rearrangeButtons([AllowAllButton, AllowSelectionButton, DeclineAllButton], "block") : rearrangeButtons([DeclineAllButton, AllowSelectionButton, AllowAllButton], "")
                    }
            }
        }
    }, window.CookieControl.Dialog.prototype.hide = function(signalIAB) {
        this.visible = !1, document.getElementById(this.DOMid) && ("custom" === this.template ? this.runCustomScript(this.customTemplateDef.FunctionHideName, "hide") : (this.fadeOut(), "pushdown" !== this.template && "pushdown-v2" !== this.template || document.body && (document.body.style.paddingTop = this.bodyPaddingTopInit + "px"))), signalIAB && this.cookieconsent && this.cookieconsent.hasFramework && "iabv2" === this.cookieconsent.framework.toLowerCase() && "object" == typeof window.CookieConsentIABCMP && !this.cookieconsent.frameworkBlocked && window.CookieConsentIABCMP.updateConsentFromBanner(), this.releaseBannerFocus()
    }, window.CookieControl.Dialog.prototype.setVisibility = function(element, value) {
        element && 2 === this.version && ("hide" === value ? element.classList.add("CybotCookiebotDialogHide") : element.classList.remove("CybotCookiebotDialogHide"))
    }, window.CookieControl.Dialog.prototype.afterToggleStateChange = function() {
        if (2 === this.version && "allowallorselection" === this.buttonMode) {
            var isDetailsTab = document.getElementById("CybotCookiebotDialogTabContent").children[1].classList.contains("CybotCookiebotDialogActive"),
                levelOptinCheck = "leveloptin" === this.responseMode,
                inlineOptinCheck = "inlineoptin" === this.responseMode && isDetailsTab;
            if (levelOptinCheck || inlineOptinCheck) {
                var denyButton = document.getElementById("CybotCookiebotDialogBodyButtonDecline"),
                    selectionButton = document.getElementById("CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection"),
                    isSelection = document.getElementById("CybotCookiebotDialogBodyLevelButtonPreferences").checked || document.getElementById("CybotCookiebotDialogBodyLevelButtonStatistics").checked || document.getElementById("CybotCookiebotDialogBodyLevelButtonMarketing").checked;
                this.setVisibility(denyButton, isSelection ? "hide" : "show"), this.setVisibility(selectionButton, isSelection ? "show" : "hide")
            }
        }
    }, window.CookieControl.Dialog.prototype.checkCustomizeButtonState = function() {
        if (2 === this.version && "ok" !== this.buttonMode && "inlineoptin" === this.responseMode) {
            var isDetailsTab = document.getElementById("CybotCookiebotDialogTabContent").children[1].classList.contains("CybotCookiebotDialogActive"),
                customizeButton = document.getElementById("CybotCookiebotDialogBodyLevelButtonCustomize"),
                allowSelectionButton = document.getElementById("CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection"),
                denyButton = document.getElementById("CybotCookiebotDialogBodyButtonDecline");
            this.setVisibility(customizeButton, isDetailsTab ? "hide" : "show"), this.setVisibility(allowSelectionButton, isDetailsTab ? "show" : "hide"), !isDetailsTab && "allowallorselection" === this.buttonMode && this.setVisibility(denyButton, "hide"), this.afterToggleStateChange()
        }
    }, window.CookieControl.Dialog.prototype.resize = function() {
        if (1 === this.version) {
            var that = this,
                newTop;
            switch (this.template) {
                case "top":
                case "slidedown":
                    this.initHeight = "auto", this.initWidth = "100%";
                    break;
                case "pushdown":
                    this.initHeight = "auto", this.initWidth = "100%", document.body && (document.body.style.paddingTop = this.bodyPaddingTopInit + parseInt(this.DOM.firstChild.offsetHeight) + "px");
                    break;
                case "bottom":
                case "slideup":
                    this.initHeight = "auto", this.initWidth = "100%";
                    var dialogHeight = parseInt(this.DOM.scrollHeight);
                    newTop = this.viewport.winHeight() - dialogHeight, newTop < 0 && (newTop = 0), this.DOM.style.top = Math.round(newTop) + "px";
                    break;
                case "popup":
                case "overlay":
                    this.initHeight = "auto", this.initWidth = "auto", this.DOM.style.marginLeft = "0px", this.DOM.style.marginTop = "0px", this.DOM.style.width = "auto", this.DOM.style.height = "auto";
                    var DialogHeight = this.DOM.offsetHeight;
                    newTop = Math.round((this.viewport.winHeight() - DialogHeight) / 4), newTop < 0 && (newTop = 0), this.DOM.style.marginTop = newTop + "px", this.DOM.style.marginLeft = "0px";
                    var DialogWidth = this.DOM.offsetWidth,
                        newLeft = Math.round((this.viewport.winWidth() - DialogWidth) / 2 - 10);
                    newLeft < 0 && (newLeft = 0), this.DOM.style.marginLeft = newLeft + "px";
                    var underlay = document.getElementById("CybotCookiebotDialogBodyUnderlay");
                    underlay && (underlay.style.height = this.viewport.docHeight() + "px", underlay.style.width = this.viewport.docWidth() + "px")
            }
            setTimeout((function() {
                that.setButtonsSize(), that.setZoomLevel()
            }), 50)
        } else {
            var bottomWrapper = document.querySelector(".CybotCookiebotDialogBodyBottomWrapper"),
                scrollContainer = document.querySelector(".CybotCookiebotScrollContainer");
            if ("none" !== window.getComputedStyle(bottomWrapper).borderStyle) {
                var dialogFooter = document.getElementById("CybotCookiebotDialogFooter"),
                    footerHeight = dialogFooter.offsetHeight;
                scrollContainer.style.minHeight = footerHeight + "px"
            } else scrollContainer.style.minHeight = null
        }
    }, window.CookieControl.Dialog.prototype.slideDown = function() {
        this.DOM.style.opacity = 1, this.DOM.style.filter = "alpha(opacity=100)";
        var dialogHeight = parseInt(this.DOM.offsetHeight),
            that = this;
        this.DOM.style.top = this.sliderPos - dialogHeight + "px", this.sliderPos += 8, this.sliderPos < dialogHeight ? setTimeout((function() {
            that.slideDown()
        }), 5) : (this.sliderPos = 0, this.resize())
    }, window.CookieControl.Dialog.prototype.pushDown = function() {
        this.DOM.style.opacity = 1, this.DOM.style.filter = "alpha(opacity=100)";
        var dialogHeight = parseInt(this.DOM.offsetHeight),
            that = this;
        1 === this.version ? (this.DOM.style.top = this.sliderPos - dialogHeight + "px", document.body && (document.body.style.paddingTop = this.bodyPaddingTopInit + this.sliderPos + "px"), this.sliderPos += 8, this.sliderPos < dialogHeight ? setTimeout((function() {
            that.pushDown()
        }), 5) : (this.sliderPos = 0, document.body && (document.body.style.paddingTop = this.bodyPaddingTopInit + dialogHeight + "px"), this.resize())) : (document.body.style.transition = "padding ease .5s", document.body.style.paddingTop = this.bodyPaddingTopInit + dialogHeight + "px", setTimeout((function() {
            document.body.style.transition = null
        }), 500))
    }, window.CookieControl.Dialog.prototype.slideUp = function() {
        this.DOM.style.opacity = 1, this.DOM.style.filter = "alpha(opacity=100)";
        var dialogHeight = parseInt(this.DOM.scrollHeight),
            that = this;
        this.DOM.style.top = this.viewport.winHeight() - this.sliderPos + "px", this.sliderPos += 8, this.sliderPos < dialogHeight ? setTimeout((function() {
            that.slideUp()
        }), 5) : (this.sliderPos = 0, this.DOM.style.top = this.viewport.winHeight() - dialogHeight + "px", this.resize())
    }, window.CookieControl.Dialog.prototype.fadeIn = function() {
        var that = this,
            underlay = document.getElementById("CybotCookiebotDialogBodyUnderlay");
        if (underlay) {
            var underlayOpacity = 80;
            100 === this.faderPos && (null != document.body.style.overflow && void 0 !== document.body.style.overflow && "" !== document.body.style.overflow && (this.bodyOverflow = document.body.style.overflow), document.body.style.overflow = "hidden"), underlay.style.height = this.viewport.docHeight() + "px", underlay.style.width = this.viewport.docWidth() + "px", underlay.style.display = "block", underlay.style.opacity = (80 - this.faderPos) / 100, underlay.style.filter = "alpha(opacity=" + (80 - this.faderPos) + ")"
        }
        this.faderPos -= 5, this.DOM.style.opacity = (100 - this.faderPos) / 100, this.DOM.style.filter = "alpha(opacity=" + (100 - this.faderPos) + ")", this.faderPos < 0 && (this.faderPos = 0), this.faderPos > 0 ? setTimeout((function() {
            that.fadeIn()
        }), 1) : (this.faderPos = 100, this.resize())
    }, window.CookieControl.Dialog.prototype.fadeOut = function() {
        var that = this;
        if (1 === this.version) {
            this.faderPos < 0 && (this.faderPos = 0);
            var underlay = document.getElementById("CybotCookiebotDialogBodyUnderlay");
            underlay && (underlay.style.height = this.viewport.docHeight() + "px", underlay.style.display = "block", underlay.style.opacity = (this.faderPos - 20) / 100, underlay.style.filter = "alpha(opacity=" + (this.faderPos - 30) + ")"), this.DOM.style.opacity = this.faderPos / 100, this.DOM.style.filter = "alpha(opacity=" + this.faderPos + ")", this.faderPos -= 5, this.faderPos < 0 && (this.faderPos = 0), this.faderPos > 0 ? setTimeout((function() {
                that.fadeOut()
            }), 1) : (this.DOM.style.display = "none", underlay && (underlay.style.display = "none", null != this.bodyOverflow ? document.body.style.overflow = this.bodyOverflow : document.body.style.overflow = "auto"), this.faderPos = 100)
        } else {
            var transitionDuration = 200;
            this.DOM.style.transitionDuration = "0.2s", this.DOM.style.opacity = 0, setTimeout((function() {
                that.DOM.style.display = "none", that.DOM.style.transitionDuration = null, that.DOM.classList.remove("CybotCookiebotDialogActive"), document.body.style.overflow = null
            }), 200)
        }
    }, window.CookieControl.Dialog.prototype.showAtTop = function() {
        this.DOM.style.opacity = 1, this.DOM.style.filter = "alpha(opacity=100)", this.DOM.style.top = "0px", this.resize()
    }, window.CookieControl.Dialog.prototype.showAtBottom = function() {
        var that = this;
        setTimeout((function() {
            that.DOM.style.opacity = 1, that.DOM.style.filter = "alpha(opacity=100)";
            var dialogHeight = parseInt(that.DOM.scrollHeight);
            that.DOM.style.top = that.viewport.winHeight() - dialogHeight + "px", that.resize()
        }), 100)
    }, window.CookieControl.Dialog.prototype.submitConsent = function(isImpliedConsent, consentURL, loadAsync) {
        var finalConsentURL = window.location.hostname;
        if (consentURL && 0 === consentURL.indexOf(location.protocol + "//" + location.host) && (finalConsentURL = consentURL), this.demomode || (this.cookieconsent.consented = !0, this.cookieconsent.declined = !1, this.cookieconsent.hasResponse = !0, this.impliedConsentOnScroll && this.detachOnscrollEvent(), this.cookieconsent.consent.preferences = !0, this.cookieconsent.consent.statistics = !0, this.cookieconsent.consent.marketing = !0, "leveloptin" !== this.responseMode && "inlineoptin" !== this.responseMode && "custom" !== this.template || ("object" == typeof window.CookieConsent.dialog.prechecked && "custom" !== this.template && (this.cookieconsent.consent.preferences = this.prechecked.preferences, this.cookieconsent.consent.statistics = this.prechecked.statistics, this.cookieconsent.consent.marketing = this.prechecked.marketing), document.getElementById("CybotCookiebotDialogBodyLevelButtonPreferences") ? document.getElementById("CybotCookiebotDialogBodyLevelButtonPreferences").checked ? this.cookieconsent.consent.preferences = !0 : this.cookieconsent.consent.preferences = !1 : document.getElementById("CookieConsentDialogBodyLevelButtonPreferences") && (document.getElementById("CookieConsentDialogBodyLevelButtonPreferences").checked ? this.cookieconsent.consent.preferences = !0 : this.cookieconsent.consent.preferences = !1), document.getElementById("CybotCookiebotDialogBodyLevelButtonStatistics") ? document.getElementById("CybotCookiebotDialogBodyLevelButtonStatistics").checked ? this.cookieconsent.consent.statistics = !0 : this.cookieconsent.consent.statistics = !1 : document.getElementById("CookieConsentDialogBodyLevelButtonStatistics") && (document.getElementById("CookieConsentDialogBodyLevelButtonStatistics").checked ? this.cookieconsent.consent.statistics = !0 : this.cookieconsent.consent.statistics = !1), document.getElementById("CybotCookiebotDialogBodyLevelButtonMarketing") ? document.getElementById("CybotCookiebotDialogBodyLevelButtonMarketing").checked ? this.cookieconsent.consent.marketing = !0 : this.cookieconsent.consent.marketing = !1 : document.getElementById("CookieConsentDialogBodyLevelButtonMarketing") && (document.getElementById("CookieConsentDialogBodyLevelButtonMarketing").checked ? this.cookieconsent.consent.marketing = !0 : this.cookieconsent.consent.marketing = !1), this.cookieconsent.responseMode = this.responseMode)), this.hide(!0), void 0 !== window.CookieDeclaration && "function" == typeof window.CookieDeclaration.SetUserStatusLabel && window.CookieDeclaration.SetUserStatusLabel(), !this.demomode) {
            var dnt = "false";
            this.cookieconsent.doNotTrack && (dnt = "true");
            var consentMethod = "strict";
            isImpliedConsent && (consentMethod = "implied");
            var asyncload = !0;
            void 0 !== loadAsync && (asyncload = loadAsync);
            var pathUrlString = "";
            if (this.cookieconsent.pathlist.length > 0 && (pathUrlString = "&path=" + encodeURIComponent(this.cookieconsent.pathlist.join(","))), this.cookieconsent.hasFramework && this.cookieconsent.frameworkLoaded && "iabv2" === this.cookieconsent.framework.toLowerCase() && !this.cookieconsent.frameworkBlocked) window.__tcfapi("getTCData", 2, (function(result) {
                result.tcString ? window.CookieConsent.IABConsentString = result.tcString : window.CookieConsent.IABConsentString = "", "object" == typeof window.CookieConsentIABCMP && window.CookieConsentIABCMP.encodeGACMString && result.addtlConsent ? window.CookieConsent.GACMConsentString = window.CookieConsentIABCMP.encodeGACMString(result.addtlConsent) : window.CookieConsent.GACMConsentString = "", pathUrlString += "&iab2=" + window.CookieConsent.IABConsentString + "&gacm=" + window.CookieConsent.GACMConsentString;
                var logConsentUrl = window.CookieConsent.host + "logconsent.ashx?action=accept&nocache=" + (new Date).getTime() + "&dnt=" + dnt + "&method=" + consentMethod + "&clp=" + window.CookieConsent.consent.preferences + "&cls=" + window.CookieConsent.consent.statistics + "&clm=" + window.CookieConsent.consent.marketing + "&cbid=" + window.CookieConsent.serial + pathUrlString + "&cbt=" + window.CookieConsent.responseMode + "&hasdata=true&referer=" + encodeURIComponent(finalConsentURL),
                    truncatedLogConsentUrl = getTruncatedString(logConsentUrl, 4096);
                window.CookieConsent.getScript(truncatedLogConsentUrl, asyncload)
            }));
            else {
                var logConsentUrl = this.cookieconsent.host + "logconsent.ashx?action=accept&nocache=" + (new Date).getTime() + "&dnt=" + dnt + "&method=" + consentMethod + "&clp=" + this.cookieconsent.consent.preferences + "&cls=" + this.cookieconsent.consent.statistics + "&clm=" + this.cookieconsent.consent.marketing + "&cbid=" + this.cookieconsent.serial + pathUrlString + "&cbt=" + window.CookieConsent.responseMode + "&hasdata=true&referer=" + encodeURIComponent(finalConsentURL),
                    truncatedLogConsentUrl = getTruncatedString(logConsentUrl, 4096);
                this.cookieconsent.getScript(truncatedLogConsentUrl, asyncload)
            }
        }
    }, window.CookieControl.Dialog.prototype.submitDecline = function(e) {
        if (this.hide(), !this.demomode) {
            this.cookieconsent.consent.preferences = !1, this.cookieconsent.consent.statistics = !1, this.cookieconsent.consent.marketing = !1, this.cookieconsent.declined = !0, this.cookieconsent.consented = !1, this.cookieconsent.hasResponse = !0;
            var pathUrlString = "";
            if (this.cookieconsent.pathlist.length > 0 && (pathUrlString = "&path=" + encodeURIComponent(this.cookieconsent.pathlist.join(","))), this.cookieconsent.hasFramework && this.cookieconsent.frameworkLoaded && "iabv2" === this.cookieconsent.framework.toLowerCase() && !this.cookieconsent.frameworkBlocked) this.IABDeselectAll(!0), "object" == typeof window.CookieConsentIABCMP && window.CookieConsentIABCMP.updateConsentFromBanner(), window.__tcfapi("getTCData", 2, (function(result) {
                result.tcString ? window.CookieConsent.IABConsentString = result.tcString : window.CookieConsent.IABConsentString = "", "object" == typeof window.CookieConsentIABCMP && window.CookieConsentIABCMP.encodeGACMString && result.addtlConsent ? window.CookieConsent.GACMConsentString = window.CookieConsentIABCMP.encodeGACMString(result.addtlConsent) : window.CookieConsent.GACMConsentString = "", pathUrlString += "&iab2=" + window.CookieConsent.IABConsentString + "&gacm=" + window.CookieConsent.GACMConsentString;
                var logConsentUrl = window.CookieConsent.host + "logconsent.ashx?action=decline&nocache=" + (new Date).getTime() + "&cbid=" + window.CookieConsent.serial + pathUrlString + "&cbt=" + window.CookieConsent.responseMode + "&hasdata=true&referer=" + encodeURIComponent(window.location.hostname),
                    truncatedLogConsentUrl = getTruncatedString(logConsentUrl, 4096);
                window.CookieConsent.getScript(truncatedLogConsentUrl)
            }));
            else {
                var logConsentUrl = this.cookieconsent.host + "logconsent.ashx?action=decline&nocache=" + (new Date).getTime() + "&cbid=" + this.cookieconsent.serial + pathUrlString + "&cbt=" + window.CookieConsent.responseMode + "&hasdata=true&referer=" + encodeURIComponent(window.location.hostname),
                    truncatedLogConsentUrl = getTruncatedString(logConsentUrl, 4096);
                this.cookieconsent.getScript(truncatedLogConsentUrl)
            }
            this.cookieconsent.resetCookies()
        }
        void 0 !== window.CookieDeclaration && "function" == typeof window.CookieDeclaration.SetUserStatusLabel && window.CookieDeclaration.SetUserStatusLabel()
    }, window.CookieControl.Dialog.prototype.addStyle = function(templatename, css) {
        this.styles[templatename] = css
    }, window.CookieControl.Dialog.prototype.appendStyle = function(templatename) {
        generateStylesAndAppendStylesheet(document, this, templatename)
    }, window.CookieControl.Dialog.prototype.showDetails = function() {
        var detailsPane = document.getElementById("CybotCookiebotDialogDetail");
        detailsPane.style.display = "block", this.resize()
    }, window.CookieControl.Dialog.prototype.toggleEdgeDetails = function() {
        if (this.DOMid) {
            var dom = document.getElementById(this.DOMid);
            if (dom && (document.body && (document.body.style.paddingTop = this.bodyPaddingTopInit + "px"), dom.style.top = null, dom.setAttribute("data-template", "popup"), dom.classList.toggle("CybotEdge"), dom.classList.contains("CybotEdge"))) {
                var tab = document.getElementById("CybotCookiebotDialogNavDeclaration");
                tab.setAttribute("aria-selected", !1)
            }
        }
    }, window.CookieControl.Dialog.prototype.hideDetails = function() {
        var detailsPane = document.getElementById("CybotCookiebotDialogDetail");
        detailsPane.style.display = "none", this.resize()
    }, window.CookieControl.Dialog.prototype.toggleDetails = function(e) {
        if (2 === this.version) this.ShowNavigationTab("CybotCookiebotDialogNavDetails");
        else {
            e && e.preventDefault(), this.DOM.style.height = this.initHeight, this.DOM.style.width = this.initWidth;
            var detailsPane = document.getElementById("CybotCookiebotDialogDetail"),
                toggleLink;
            toggleLink = "leveloptin" === this.responseMode ? document.getElementById("CybotCookiebotDialogBodyLevelDetailsButton") : document.getElementById("CybotCookiebotDialogBodyButtonDetails");
            var DetailsCSSElement = new window.CookieControl.CSS(toggleLink);
            if (detailsPane) {
                var AcceptButton;
                switch (this.template) {
                    case "top":
                    case "slidedown":
                    case "pushdown":
                    case "popup":
                    case "overlay":
                        "block" === detailsPane.style.display ? ("leveloptin" === this.responseMode ? (DetailsCSSElement.removeClass("CybotCookiebotDialogBodyLevelDetailsButtonExpanded"), AcceptButton = document.getElementById("CybotCookiebotDialogBodyLevelButtonAccept")) : (DetailsCSSElement.removeClass("CybotCookiebotDialogBodyLinkExpanded"), AcceptButton = document.getElementById("CybotCookiebotDialogBodyButtonAccept")), this.hideDetails(), toggleLink.innerHTML = this.showDetailsText, AcceptButton.focus()) : (toggleLink.innerHTML = this.hideDetailsText, "leveloptin" === this.responseMode ? DetailsCSSElement.addClass("CybotCookiebotDialogBodyLevelDetailsButtonExpanded") : DetailsCSSElement.addClass("CybotCookiebotDialogBodyLinkExpanded"), this.showDetails(), toggleLink.blur());
                        break;
                    case "bottom":
                    case "slideup":
                        "block" === detailsPane.style.display ? ("leveloptin" === this.responseMode ? (DetailsCSSElement.removeClass("CybotCookiebotDialogBodyLevelDetailsButtonExpanded"), AcceptButton = document.getElementById("CybotCookiebotDialogBodyLevelButtonAccept")) : (DetailsCSSElement.removeClass("CybotCookiebotDialogBodyLinkExpanded"), AcceptButton = document.getElementById("CybotCookiebotDialogBodyButtonAccept")), this.hideDetails(), toggleLink.innerHTML = this.showDetailsText, AcceptButton.focus()) : (toggleLink.innerHTML = this.hideDetailsText, "leveloptin" === this.responseMode ? DetailsCSSElement.addClass("CybotCookiebotDialogBodyLevelDetailsButtonExpanded") : DetailsCSSElement.addClass("CybotCookiebotDialogBodyLinkExpanded"), this.showDetails(), toggleLink.blur());
                        var thisDOMElement = document.getElementById(this.name),
                            dialogHeight = parseInt(thisDOMElement.scrollHeight);
                        thisDOMElement.style.top = this.viewport.winHeight() - dialogHeight + "px"
                }
                if ("inlineoptin" === this.responseMode) {
                    if ("block" === detailsPane.style.display) {
                        var cookieTypeTabWrapper = document.getElementById("CybotCookiebotDialogDetailBodyContentCookieContainerTypes");
                        if (parseInt(cookieTypeTabWrapper.clientHeight) > 0) {
                            cookieTypeTabWrapper.style.paddingTop = "0px";
                            var wrapperheight = 170,
                                paddingsize = 170 - parseInt(cookieTypeTabWrapper.clientHeight);
                            cookieTypeTabWrapper.style.paddingTop = paddingsize + "px"
                        }
                    }
                } else if ("block" === detailsPane.style.display) {
                    var cookieTypeTabWrapperNecessary = document.getElementById("CybotCookiebotDialogDetailBodyContentCookieContainerNecessary");
                    cookieTypeTabWrapperNecessary.style.borderTop = "0px";
                    var IABv2FirstTabWrapper = document.getElementById("CybotCookiebotDialogDetailBodyContentIABv2Intro");
                    IABv2FirstTabWrapper && (IABv2FirstTabWrapper.style.borderTop = "0px")
                }
            }
            this.resize()
        }
    }, window.CookieControl.Dialog.prototype.showDetailPane = function(paneID) {
        for (var paneIDs = ["CybotCookiebotDialogDetailBodyContentTextAbout", "CybotCookiebotDialogDetailBodyContentTextIABv2", "CybotCookiebotDialogDetailBodyContentTextOverview"], i = 0; i < paneIDs.length; i++) {
            var tempPane = document.getElementById(paneIDs[i]);
            tempPane && (tempPane.style.display = "none")
        }
        for (var tabIDs = ["CybotCookiebotDialogDetailBodyContentTabsAbout", "CybotCookiebotDialogDetailBodyContentTabsIABv2", "CybotCookiebotDialogDetailBodyContentTabsOverview"], j = 0, detailsTab, detailsPane; j < tabIDs.length; j++) {
            var tempTab = document.getElementById(tabIDs[j]);
            tempTab && (tempTab.className = "CybotCookiebotDialogDetailBodyContentTab CybotCookiebotDialogDetailBodyContentTabsItem")
        }
        switch (paneID.toLowerCase()) {
            case "overview":
                detailsTab = document.getElementById("CybotCookiebotDialogDetailBodyContentTabsOverview"), detailsPane = document.getElementById("CybotCookiebotDialogDetailBodyContentTextOverview");
                break;
            case "iabv2":
                detailsTab = document.getElementById("CybotCookiebotDialogDetailBodyContentTabsIABv2"), detailsPane = document.getElementById("CybotCookiebotDialogDetailBodyContentTextIABv2");
                break;
            default:
                detailsTab = document.getElementById("CybotCookiebotDialogDetailBodyContentTabsAbout"), detailsPane = document.getElementById("CybotCookiebotDialogDetailBodyContentTextAbout")
        }
        detailsTab && (detailsTab.className = "CybotCookiebotDialogDetailBodyContentTab CybotCookiebotDialogDetailBodyContentTabsItemSelected"), detailsPane && (detailsPane.style.display = "block")
    }, window.CookieControl.Dialog.prototype.htmlDecode = function(input) {
        var e = document.createElement("div");
        return e.innerHTML = input, 0 === e.childNodes.length ? "" : e.childNodes[0].nodeValue
    }, window.CookieControl.Dialog.prototype.showCookieContainerDetailPane = function(cookiePaneID) {
        for (var paneIDs = ["CybotCookiebotDialogDetailBodyContentCookieTabsNecessary", "CybotCookiebotDialogDetailBodyContentCookieTabsPreference", "CybotCookiebotDialogDetailBodyContentCookieTabsStatistics", "CybotCookiebotDialogDetailBodyContentCookieTabsAdvertising", "CybotCookiebotDialogDetailBodyContentCookieTabsUnclassified"], i = 0; i < paneIDs.length; i++) {
            var tempPane = document.getElementById(paneIDs[i]);
            tempPane.style.display = "none"
        }
        for (var tabIDs = ["CybotCookiebotDialogDetailBodyContentCookieContainerNecessary", "CybotCookiebotDialogDetailBodyContentCookieContainerPreference", "CybotCookiebotDialogDetailBodyContentCookieContainerStatistics", "CybotCookiebotDialogDetailBodyContentCookieContainerAdvertising", "CybotCookiebotDialogDetailBodyContentCookieContainerUnclassified"], j = 0, detailsTab, detailsPane; j < tabIDs.length; j++) {
            var tempTab = document.getElementById(tabIDs[j]);
            tempTab.className = "CybotCookiebotDialogDetailBodyContentCookieContainerTypes"
        }
        switch (cookiePaneID.toLowerCase()) {
            case "preference":
                detailsTab = document.getElementById("CybotCookiebotDialogDetailBodyContentCookieContainerPreference"), detailsPane = document.getElementById("CybotCookiebotDialogDetailBodyContentCookieTabsPreference");
                break;
            case "statistics":
                detailsTab = document.getElementById("CybotCookiebotDialogDetailBodyContentCookieContainerStatistics"), detailsPane = document.getElementById("CybotCookiebotDialogDetailBodyContentCookieTabsStatistics");
                break;
            case "advertising":
                detailsTab = document.getElementById("CybotCookiebotDialogDetailBodyContentCookieContainerAdvertising"), detailsPane = document.getElementById("CybotCookiebotDialogDetailBodyContentCookieTabsAdvertising");
                break;
            case "unclassified":
                detailsTab = document.getElementById("CybotCookiebotDialogDetailBodyContentCookieContainerUnclassified"), detailsPane = document.getElementById("CybotCookiebotDialogDetailBodyContentCookieTabsUnclassified");
                break;
            default:
                detailsTab = document.getElementById("CybotCookiebotDialogDetailBodyContentCookieContainerNecessary"), detailsPane = document.getElementById("CybotCookiebotDialogDetailBodyContentCookieTabsNecessary")
        }
        detailsTab.className = "CybotCookiebotDialogDetailBodyContentCookieContainerTypesSelected", detailsPane.scrollIntoView(!0), detailsPane.style.display = "block"
    }, window.CookieControl.Dialog.prototype.showCookieContainerIABv2DetailPane = function(IABPaneID) {
        if (2 === this.version) this.ToggleIabTab("CybotCookiebotDialogDetailBodyContentIABv2Partners");
        else {
            for (var paneIDs = ["CybotCookiebotDialogDetailBodyContentIABv2TabPurposes", "CybotCookiebotDialogDetailBodyContentIABv2TabFeatures", "CybotCookiebotDialogDetailBodyContentIABv2TabPartners"], i = 0; i < paneIDs.length; i++) {
                var tempPane = document.getElementById(paneIDs[i]);
                tempPane && (tempPane.style.display = "none")
            }
            for (var tabIDs = ["CybotCookiebotDialogDetailBodyContentIABv2Purposes", "CybotCookiebotDialogDetailBodyContentIABv2Features", "CybotCookiebotDialogDetailBodyContentIABv2Partners"], j = 0, detailsTab, detailsPane; j < tabIDs.length; j++) {
                var tempTab = document.getElementById(tabIDs[j]);
                tempTab && (tempTab.className = "CybotCookiebotDialogDetailBodyContentCookieContainerTypes")
            }
            switch (IABPaneID.toLowerCase()) {
                case "features":
                    detailsTab = document.getElementById("CybotCookiebotDialogDetailBodyContentIABv2Features"), detailsPane = document.getElementById("CybotCookiebotDialogDetailBodyContentIABv2TabFeatures");
                    break;
                case "partners":
                    detailsTab = document.getElementById("CybotCookiebotDialogDetailBodyContentIABv2Partners"), detailsPane = document.getElementById("CybotCookiebotDialogDetailBodyContentIABv2TabPartners");
                    break;
                default:
                    detailsTab = document.getElementById("CybotCookiebotDialogDetailBodyContentIABv2Purposes"), detailsPane = document.getElementById("CybotCookiebotDialogDetailBodyContentIABv2TabPurposes")
            }
            detailsTab && (detailsTab.className = "CybotCookiebotDialogDetailBodyContentIABv2TabSelected"), detailsPane && (detailsPane.scrollIntoView(!0), detailsPane.style.display = "block")
        }
    }, window.CookieControl.Dialog.prototype.setStateUnchecked = function() {
        setTimeout((function() {
            document.getElementById("CybotCookiebotDialogBodyLevelButtonPreferences") && (document.getElementById("CybotCookiebotDialogBodyLevelButtonPreferences").checked = !1), document.getElementById("CybotCookiebotDialogBodyLevelButtonStatistics") && (document.getElementById("CybotCookiebotDialogBodyLevelButtonStatistics").checked = !1), document.getElementById("CybotCookiebotDialogBodyLevelButtonMarketing") && (document.getElementById("CybotCookiebotDialogBodyLevelButtonMarketing").checked = !1), this.cookieconsent.hasFramework && "iabv2" === this.cookieconsent.framework.toLowerCase() && !this.cookieconsent.frameworkBlocked && this.IABDeselectAll(!0)
        }), 100)
    }, window.CookieControl.Dialog.prototype.getIAB2PurposeById = function(PurposeID) {
        for (var k in this.IABGVL.purposes)
            if (this.IABGVL.purposes[k].id === PurposeID) return this.IABGVL.purposes[k].name;
        return ""
    }, window.CookieControl.Dialog.prototype.getIAB2SpecialPurposeById = function(SpecialPurposeID) {
        for (var k in this.IABGVL.specialPurposes)
            if (this.IABGVL.specialPurposes[k].id === SpecialPurposeID) return this.IABGVL.specialPurposes[k].name;
        return ""
    }, window.CookieControl.Dialog.prototype.getIAB2FeatureById = function(FeatureID) {
        for (var k in this.IABGVL.features)
            if (this.IABGVL.features[k].id === FeatureID) return this.IABGVL.features[k].name;
        return ""
    }, window.CookieControl.Dialog.prototype.getIAB2SpecialFeatureById = function(SpecialFeatureID) {
        for (var k in this.IABGVL.specialFeatures)
            if (this.IABGVL.specialFeatures[k].id === SpecialFeatureID) return this.IABGVL.specialFeatures[k].name;
        return ""
    }, window.CookieControl.Dialog.prototype.IABSelectPurposes = function() {
        for (var IABelements = document.getElementsByClassName("CybotCookiebotDialogBodyIABButtonPurposes"), i = 0; i < IABelements.length; i++) IABelements[i].checked = !0;
        IABelements = document.getElementsByClassName("CybotCookiebotDialogBodyIABButtonPurposesLegitimateInterestSelection");
        for (var j = 0; j < IABelements.length; j++) IABelements[j].checked = !0
    }, window.CookieControl.Dialog.prototype.IABDeselectPurposes = function(exemptLegInt) {
        for (var IABelements = document.getElementsByClassName("CybotCookiebotDialogBodyIABButtonPurposes"), i = 0; i < IABelements.length; i++) IABelements[i].checked = !1;
        IABelements = document.getElementsByClassName("CybotCookiebotDialogBodyIABButtonPurposesLegitimateInterestSelection");
        for (var j = 0; j < IABelements.length; j++) exemptLegInt || (IABelements[j].checked = !1)
    }, window.CookieControl.Dialog.prototype.IABSelectFeatures = function() {
        for (var IABelements = document.getElementsByClassName("CybotCookiebotDialogBodyIABButtonFeatures"), i = 0; i < IABelements.length; i++) IABelements[i].checked = !0
    }, window.CookieControl.Dialog.prototype.IABDeselectFeatures = function() {
        for (var IABelements = document.getElementsByClassName("CybotCookiebotDialogBodyIABButtonFeatures"), i = 0; i < IABelements.length; i++) IABelements[i].checked = !1
    }, window.CookieControl.Dialog.prototype.IABSelectVendors = function() {
        for (var IABelements = document.getElementsByClassName("CybotCookiebotDialogBodyIABButtonVendors"), i = 0; i < IABelements.length; i++) IABelements[i].checked = !0;
        IABelements = document.getElementsByClassName("CybotCookiebotDialogBodyIABButtonVendorsLegitimateInterestSelection");
        for (var j = 0; j < IABelements.length; j++) IABelements[j].checked = !0
    }, window.CookieControl.Dialog.prototype.IABDeselectVendors = function(exemptLegInt) {
        for (var IABelements = document.getElementsByClassName("CybotCookiebotDialogBodyIABButtonVendors"), i = 0; i < IABelements.length; i++) IABelements[i].checked = !1;
        IABelements = document.getElementsByClassName("CybotCookiebotDialogBodyIABButtonVendorsLegitimateInterestSelection");
        for (var j = 0; j < IABelements.length; j++) exemptLegInt || (IABelements[j].checked = !1)
    }, window.CookieControl.Dialog.prototype.IABSelectAll = function() {
        this.IABSelectPurposes(), this.IABSelectFeatures(), this.IABSelectVendors()
    }, window.CookieControl.Dialog.prototype.ShowNavigationTab = function(domId) {
        2 === this.version && this.DOM.classList.contains("CybotEdge") && this.toggleEdgeDetails();
        for (var tabs = document.getElementsByClassName("CybotCookiebotDialogNavItemLink"), panels = document.getElementsByClassName("CybotCookiebotDialogTabPanel"), i = 0; i < tabs.length; i++) tabs[i].classList.remove("CybotCookiebotDialogActive"), tabs[i].setAttribute("aria-selected", !1);
        for (var j = 0; j < panels.length; j++) {
            var panel = panels[j];
            this.setVisibility(panel, "hide"), panel.parentNode.classList.contains("CybotCookiebotScrollContainer") && (this.setVisibility(panel.parentNode, "hide"), panel.parentNode.classList.remove("CybotCookiebotDialogActive"))
        }
        var el = document.getElementById(domId);
        if (el) {
            el.focus(), el.setAttribute("aria-selected", !0), el.classList.add("CybotCookiebotDialogActive");
            var id = el.getAttribute("data-target");
            if (id) {
                var panelToShow = document.getElementById(id);
                this.setVisibility(panelToShow, "show"), panelToShow.parentNode.classList.contains("CybotCookiebotScrollContainer") && (this.setVisibility(panelToShow.parentNode, "show"), panelToShow.parentNode.classList.add("CybotCookiebotDialogActive"))
            }
        }
        this.checkCustomizeButtonState()
    }, window.CookieControl.Dialog.prototype.ToggleIabTab = function(domId) {
        var el = document.getElementById(domId);
        el.classList.toggle("CybotCookiebotDialogCollapsed");
        var id = el.getAttribute("data-target");
        if (id) {
            var target = document.getElementById(id);
            target && (target.classList.remove("CybotCookiebotDialogHide"), target.setAttribute("aria-expanded", "true"), target.scrollIntoView(!0))
        }
    }, window.CookieControl.Dialog.prototype.ShowIABVendors = function(e) {
        e && e.preventDefault(), 2 === this.version ? (this.ShowNavigationTab("CybotCookiebotDialogNavAdSettings"), this.ToggleIabTab("CybotCookiebotDialogDetailBodyContentIABv2Partners")) : (document.getElementById("CybotCookiebotDialogDetail") && "block" !== document.getElementById("CybotCookiebotDialogDetail").style.display && this.toggleDetails(), this.showDetailPane("iabv2"), this.showCookieContainerIABv2DetailPane("partners"))
    }, window.CookieControl.Dialog.prototype.IABDeselectAll = function(excemptLegInt) {
        this.IABDeselectPurposes(excemptLegInt), this.IABDeselectFeatures(), this.IABDeselectVendors(excemptLegInt)
    }, window.CookieControl.Dialog.prototype.IABToggleContainer = function(toggleElementContainer) {
        var toggleElementContainerNode = document.getElementById(toggleElementContainer);
        if (toggleElementContainerNode) {
            var DetailsCSSElement = new window.CookieControl.CSS(toggleElementContainerNode);
            if (DetailsCSSElement.toggleClass("CybotCookiebotDialogBodyLevelButtonIABContainer", "CybotCookiebotDialogBodyLevelButtonIABContainerCollapsed"), toggleElementContainerNode.firstChild) {
                var DetailsCSSToggleElement = new window.CookieControl.CSS(toggleElementContainerNode.firstChild);
                DetailsCSSToggleElement.toggleClass("CybotCookiebotDialogBodyLevelButtonIABContainerToggleShow", "CybotCookiebotDialogBodyLevelButtonIABContainerToggleHide"), DetailsCSSToggleElement.hasClass("CybotCookiebotDialogBodyLevelButtonIABContainerToggleShow") ? toggleElementContainerNode.firstChild.title = this.IABResourceStrings.expand : toggleElementContainerNode.firstChild.title = this.IABResourceStrings.collapse
            }
            if (2 === this.version) {
                var target = toggleElementContainerNode.querySelector(".CybotCookiebotDialogBodyLevelButtonIABDescription"),
                    isExpanded = null !== target.offsetParent;
                toggleElementContainerNode.setAttribute("aria-expanded", isExpanded)
            }
        }
    }, window.CookieControl.Dialog.prototype.IABShowDetailedInformation = function(caller) {
        var vendorId = caller.dataset.iabvendorid,
            vendor = this.IABGVL.vendors[vendorId],
            container = document.getElementById("CybotCookiebotDialogBodyLevelButtonIABVendorContainer" + vendorId),
            detailsContainer = container.getElementsByClassName("CybotCookiebotDialogBodyIABDetails")[0];
        detailsContainer.innerHTML = this.IABResourceStrings.loadingText;
        var successCallback = this.IABCreateStorageDeviceDisclosure.bind(this),
            errorCallback = this.IABStorageDeviceDisclosureFailure.bind(this),
            xhr = new XMLHttpRequest;
        xhr.open("GET", vendor.deviceStorageDisclosureUrl, !0), xhr.onload = function(e) {
            4 === xhr.readyState && (200 === xhr.status ? successCallback(detailsContainer, caller, vendor, xhr.responseText) : errorCallback(detailsContainer, xhr.statusText))
        }, xhr.onerror = function(e) {
            errorCallback(detailsContainer, xhr.statusText)
        }, xhr.send(null)
    }, window.CookieControl.Dialog.prototype.IABStorageDeviceDisclosureFailure = function(detailsContainer, statusText) {
        detailsContainer.innerHTML = this.IABResourceStrings.errorText
    }, window.CookieControl.Dialog.prototype.IABCreateStorageDeviceDisclosure = function(detailsContainer, caller, vendor, text) {
        var trackerList;
        try {
            var disclosureInformation = JSON.parse(text);
            trackerList = disclosureInformation.disclosures
        } catch (exception) {
            return void this.IABStorageDeviceDisclosureFailure(vendor, exception.message)
        }
        var newVendorContent = '<table class="CybotCookiebotDialogDetailBodyContentCookieTypeTable">';
        newVendorContent += "<thead><tr>", newVendorContent += '<th scope="col">' + this.IABResourceStrings.name + "</th>", newVendorContent += '<th scope="col">' + this.IABResourceStrings.domain + "</th>", newVendorContent += '<th scope="col">' + this.IABResourceStrings.purpose + "</th>", newVendorContent += '<th scope="col">' + this.IABResourceStrings.expiry + "</th>", newVendorContent += '<th scope="col">' + this.IABResourceStrings.type + "</th>", newVendorContent += "</thead></tr>", newVendorContent += "<tbody>";
        for (var z = 0; z < trackerList.length; z++) {
            var tracker = trackerList[z];
            newVendorContent += "<tr>", newVendorContent += "<td>" + tracker.identifier + "</td>", newVendorContent += "<td>", tracker.domain && (newVendorContent += tracker.domain), newVendorContent += "</td>", newVendorContent += '<td><ul class="CybotCookiebotDialogBodyLevelButtonIABBullet">';
            for (var trackerX = 0; trackerX < tracker.purposes.length; trackerX++) newVendorContent += "<li>" + this.getIAB2PurposeById(tracker.purposes[trackerX]) + "</li>";
            if (newVendorContent += "</ul></td>", newVendorContent += "<td>", tracker.maxAgeSeconds) {
                var refreshMessage = tracker.cookieRefresh ? "<br /><i>" + this.IABResourceStrings.expiryRefreshText + "</i>" : "";
                newVendorContent += this.CalculateHumanDuration(tracker.maxAgeSeconds, this.IABResourceStrings) + refreshMessage
            }
            newVendorContent += "</td>";
            var trackingTypeStr = null;
            switch (tracker.type) {
                case "app":
                    trackingTypeStr = this.IABResourceStrings.trackingTypeApp;
                    break;
                case "cookie":
                    trackingTypeStr = this.IABResourceStrings.trackingTypeCookie;
                    break;
                default:
                    trackingTypeStr = this.IABResourceStrings.trackingTypeWeb
            }
            newVendorContent += "<td>" + trackingTypeStr + "</td>", newVendorContent += "</tr>"
        }
        newVendorContent += "</tbody></table>", detailsContainer.innerHTML = newVendorContent, caller.parentElement.style.display = "none"
    }, window.CookieControl.Dialog.prototype.CalculateHumanDuration = function(seconds, iabStrings) {
        if (seconds <= 0) return iabStrings.session;
        for (var levels = [
                [Math.floor(seconds / 31536e3), [iabStrings.year, iabStrings.years]],
                [Math.floor(seconds % 31536e3 / 86400), [iabStrings.day, iabStrings.days]],
                [Math.floor(seconds % 31536e3 % 86400 / 3600), [iabStrings.hour, iabStrings.hours]],
                [Math.floor(seconds % 31536e3 % 86400 % 3600 / 60), [iabStrings.minutes, iabStrings.minutes]],
                [seconds % 31536e3 % 86400 % 3600 % 60, [iabStrings.second, iabStrings.seconds]]
            ], returntext = "", i = 0, max = levels.length; i < max; i++) 0 !== levels[i][0] && (returntext += " " + levels[i][0] + " " + (1 === levels[i][0] ? levels[i][1][0] : levels[i][1][1]));
        return returntext.trim()
    }, window.CookieControl.Viewport = function() {
        this.docHeight = function() {
            var w = window,
                d = document,
                e = d.documentElement,
                g = d.getElementsByTagName("body")[0];
            return Math.max(Math.max(d.body.scrollHeight, d.documentElement.scrollHeight), Math.max(d.body.offsetHeight, d.documentElement.offsetHeight), Math.max(d.body.clientHeight, d.documentElement.clientHeight), w.innerHeight || e.clientHeight || g.clientHeight)
        }, this.docWidth = function() {
            var w = window,
                d = document,
                e = d.documentElement,
                g = d.getElementsByTagName("body")[0];
            return Math.max(Math.max(d.body.scrollWidth, d.documentElement.scrollWidth), Math.max(d.body.offsetWidth, d.documentElement.offsetWidth), Math.max(d.body.clientWidth, d.documentElement.clientWidth), w.innerWidth || e.clientWidth || g.clientWidth)
        }, this.winHeight = function() {
            var w = window,
                d = document,
                e = d.documentElement,
                g = d.getElementsByTagName("body")[0];
            return w.innerHeight || e.clientHeight || g.clientHeight
        }, this.winWidth = function() {
            var w = window,
                d = document,
                e = d.documentElement,
                g = d.getElementsByTagName("body")[0];
            return w.innerWidth || e.clientWidth || g.clientWidth
        }, this.findPos = function(obj) {
            var curtop = 0,
                curleft = 0;
            if (obj.offsetParent)
                do {
                    curleft += obj.offsetLeft, curtop += obj.offsetTop
                } while (obj = obj.offsetParent);
            return [curleft, curtop]
        }, this.getPageScroll = function() {
            var xScroll, yScroll;
            return self.pageYOffset ? (yScroll = self.pageYOffset, xScroll = self.pageXOffset) : document.documentElement && document.documentElement.scrollTop ? (yScroll = document.documentElement.scrollTop, xScroll = document.documentElement.scrollLeft) : document.body && (yScroll = document.body.scrollTop, xScroll = document.body.scrollLeft), [xScroll, yScroll]
        }, this.findPosRelativeToViewport = function(obj) {
            var objPos = this.findPos(obj),
                scroll = this.getPageScroll();
            return [objPos[0] - scroll[0], objPos[1] - scroll[1]]
        }, this.addResizeEvent = function(func) {
            window.addEventListener("resize", (function() {
                func()
            }), !1), window.addEventListener("orientationchange", (function() {
                func()
            }), !1)
        }
    }, window.CookieControl.Viewport.prototype.isIE = function() {
        var myNav = navigator.userAgent.toLowerCase();
        return -1 !== myNav.indexOf("msie") ? parseInt(myNav.split("msie")[1]) : 0
    }, window.CookieControl.Dialog.prototype.clearDOM = function() {
        var dialogs = document.getElementsByName(this.DOMid);
        if (dialogs.length > 0)
            for (var i = 0; i < dialogs.length; i++) dialogs[i].parentNode.removeChild(dialogs[i]);
        var dialogstyle = document.getElementById("CookiebotDialogStyle");
        dialogstyle && dialogstyle.parentNode.removeChild(dialogstyle);
        var overlay = document.getElementById("CybotCookiebotDialogBodyUnderlay");
        overlay && overlay.parentNode.removeChild(overlay)
    }, window.CookieControl.CSS = function(ele) {
        this.HTMLElement = ele
    }, window.CookieControl.CSS.prototype.hasClass = function(cls) {
        return this.HTMLElement.className && this.HTMLElement.className.match(new RegExp("(\\s|^)" + cls + "(\\s|$)"))
    }, window.CookieControl.CSS.prototype.addClass = function(cls) {
        this.hasClass(cls) || (this.HTMLElement.className += " " + cls)
    }, window.CookieControl.CSS.prototype.removeClass = function(cls) {
        if (this.hasClass(cls)) {
            var reg = new RegExp("(\\s|^)" + cls + "(\\s|$)");
            this.HTMLElement.className = this.HTMLElement.className.replace(reg, " ")
        }
    }, window.CookieControl.CSS.prototype.replaceClass = function(oldClass, newClass) {
        this.hasClass(oldClass) && (this.removeClass(oldClass), this.addClass(newClass))
    }, window.CookieControl.CSS.prototype.toggleClass = function(cls1, cls2) {
        this.hasClass(cls1) ? this.replaceClass(cls1, cls2) : this.hasClass(cls2) ? this.replaceClass(cls2, cls1) : this.addClass(cls1)
    }
}();

CookieConsent.consentLifetime = 12;
CookieConsent.responseMode = 'optin';
CookieControl.Dialog.prototype.loadTemplates = function() {
    this.templates['bottom'] = '<div id="CybotCookiebotDialog" name="CybotCookiebotDialog" role="dialog" aria-describedby="CybotCookiebotDialogBodyContentTitle" lang="[#LANGUAGE#]" dir="[#TEXTDIRECTION#]" ng-non-bindable><div id="CybotCookiebotDialogBody"><div id="CybotCookiebotDialogPoweredbyLink"><img id="CybotCookiebotDialogPoweredbyImage" src="[#LOGO#]" alt="[#LOGOALT#]"></div><div id="CybotCookiebotDialogBodyContent"><h2 id="CybotCookiebotDialogBodyContentTitle" lang="[#LANGUAGE#]">[#TITLE#]</h2><div id="CybotCookiebotDialogBodyContentText" lang="[#LANGUAGE#]">[#TEXT#]</div></div><div id="CybotCookiebotDialogBodyContentControls"><div class="CybotCookiebotDialogBodyContentControlsWrapper"><input type="checkbox" id="CybotCookiebotDialogBodyContentCheckboxPersonalInformation" class="CybotCookiebotDialogBodyLevelButton" tabindex="0"> <label class="CybotCookiebotDialogBodyContentLabelPersonalInformation" for="CybotCookiebotDialogBodyContentCheckboxPersonalInformation">[#OOI_PERSONAL_INFORMATION#]</label></div></div><div id="CybotCookiebotDialogBodyButtons"><a id="CybotCookiebotDialogBodyButtonDecline" class="CybotCookiebotDialogBodyButton" href="#" tabindex="0" lang="[#LANGUAGE#]">[#DECLINE#] </a><a id="CybotCookiebotDialogBodyButtonAccept" class="CybotCookiebotDialogBodyButton" href="#" tabindex="0" lang="[#LANGUAGE#]">[#ACCEPT#] </a><a id="CybotCookiebotDialogBodyButtonDetails" class="CybotCookiebotDialogBodyLink" href="#" tabindex="0" lang="[#LANGUAGE#]">[#DETAILS#]</a></div><div id="CybotCookiebotDialogBodyLevelWrapper"><div id="CybotCookiebotDialogBodyLevelButtonAcceptWrapper"><a id="CybotCookiebotDialogBodyLevelButtonAccept" href="#" tabindex="0" lang="[#LANGUAGE#]">[#MULTIACCEPT#]</a></div><div id="CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelectionWrapper" style="display:none"><a id="CybotCookiebotDialogBodyLevelButtonLevelOptinDeclineAll" class="CybotCookiebotDialogBodyButton" href="#" tabindex="0" lang="[#LANGUAGE#]">[#DECLINE#] </a><a id="CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection" class="CybotCookiebotDialogBodyButton" href="#" tabindex="0" lang="[#LANGUAGE#]">[#LEVELOPTIN_ALLOW_SELECTION#] </a><a id="CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll" class="CybotCookiebotDialogBodyButton" href="#" tabindex="0" lang="[#LANGUAGE#]">[#LEVELOPTIN_ALLOWALL#]</a></div><div id="CybotCookiebotDialogBodyLevelButtons"><div id="CybotCookiebotDialogBodyLevelButtonsTable"><div id="CybotCookiebotDialogBodyLevelButtonsRow"><div id="CybotCookiebotDialogBodyLevelButtonsSelectPane"><div class="CybotCookiebotDialogBodyLevelButtonWrapper"><input type="checkbox" id="CybotCookiebotDialogBodyLevelButtonNecessary" class="CybotCookiebotDialogBodyLevelButton CybotCookiebotDialogBodyLevelButtonDisabled" disabled="disabled" checked="checked"> <label for="CybotCookiebotDialogBodyLevelButtonNecessary">[#COOKIETYPE_NECESSARY_RAW#]</label></div><div class="CybotCookiebotDialogBodyLevelButtonWrapper"><input type="checkbox" id="CybotCookiebotDialogBodyLevelButtonPreferences" class="CybotCookiebotDialogBodyLevelButton" checked="checked" tabindex="0"> <label for="CybotCookiebotDialogBodyLevelButtonPreferences">[#COOKIETYPE_PREFERENCE_RAW#]</label></div><div class="CybotCookiebotDialogBodyLevelButtonWrapper"><input type="checkbox" id="CybotCookiebotDialogBodyLevelButtonStatistics" class="CybotCookiebotDialogBodyLevelButton" checked="checked" tabindex="0"> <label for="CybotCookiebotDialogBodyLevelButtonStatistics">[#COOKIETYPE_STATISTICS_RAW#]</label></div><div class="CybotCookiebotDialogBodyLevelButtonWrapper"><input type="checkbox" id="CybotCookiebotDialogBodyLevelButtonMarketing" class="CybotCookiebotDialogBodyLevelButton" checked="checked" tabindex="0"> <label for="CybotCookiebotDialogBodyLevelButtonMarketing">[#COOKIETYPE_ADVERTISING_RAW#]</label></div></div><div id="CybotCookiebotDialogBodyLevelDetailsWrapper"><a id="CybotCookiebotDialogBodyLevelDetailsButton" class="CybotCookiebotDialogBodyLink" href="#" tabindex="0" lang="[#LANGUAGE#]">[#DETAILS#]</a></div></div></div></div></div></div><div id="CybotCookiebotDialogDetail"><div id="CybotCookiebotDialogDetailBody"><div id="CybotCookiebotDialogDetailBodyContentTabs"><a id="CybotCookiebotDialogDetailBodyContentTabsOverview" class="CybotCookiebotDialogDetailBodyContentTab CybotCookiebotDialogDetailBodyContentTabsItemSelected" href="#" lang="[#LANGUAGE#]">[#COOKIESOVERVIEW#] </a><a id="CybotCookiebotDialogDetailBodyContentTabsIABv2" class="CybotCookiebotDialogDetailBodyContentTab CybotCookiebotDialogDetailBodyContentTabsItem" href="#" lang="[#LANGUAGE#]">[#IABV2SETTINGS#] </a><a id="CybotCookiebotDialogDetailBodyContentTabsAbout" class="CybotCookiebotDialogDetailBodyContentTab CybotCookiebotDialogDetailBodyContentTabsItem" href="#" lang="[#LANGUAGE#]">[#ABOUTCOOKIES#]</a></div><div id="CybotCookiebotDialogDetailBodyContent"><div id="CybotCookiebotDialogDetailBodyContentTextOverview" lang="[#LANGUAGE#]"><div id="CybotCookiebotDialogDetailBodyContentCookieContainer"><div id="CybotCookiebotDialogDetailBodyContentCookieContainerTypes"><a id="CybotCookiebotDialogDetailBodyContentCookieContainerNecessary" href="#" class="CybotCookiebotDialogDetailBodyContentCookieContainerTypesSelected" lang="[#LANGUAGE#]" aria-label="[#COOKIETYPE_NECESSARY#]"><label for="CybotCookiebotDialogDetailBodyContentCookieContainerNecessary" aria-hidden="true">&thinsp;</label>[#COOKIETYPE_NECESSARY#]</a> <a id="CybotCookiebotDialogDetailBodyContentCookieContainerPreference" href="#" class="CybotCookiebotDialogDetailBodyContentCookieContainerTypes" lang="[#LANGUAGE#]" aria-label="[#COOKIETYPE_PREFERENCE#]"><label for="CybotCookiebotDialogDetailBodyContentCookieContainerPreference" aria-hidden="true">&thinsp;</label>[#COOKIETYPE_PREFERENCE#]</a> <a id="CybotCookiebotDialogDetailBodyContentCookieContainerStatistics" href="#" class="CybotCookiebotDialogDetailBodyContentCookieContainerTypes" lang="[#LANGUAGE#]" aria-label="[#COOKIETYPE_STATISTICS#]"><label for="CybotCookiebotDialogDetailBodyContentCookieContainerStatistics" aria-hidden="true">&thinsp;</label>[#COOKIETYPE_STATISTICS#]</a> <a id="CybotCookiebotDialogDetailBodyContentCookieContainerAdvertising" href="#" class="CybotCookiebotDialogDetailBodyContentCookieContainerTypes" lang="[#LANGUAGE#]" aria-label="[#COOKIETYPE_ADVERTISING#]"><label for="CybotCookiebotDialogDetailBodyContentCookieContainerAdvertising" aria-hidden="true">&thinsp;</label>[#COOKIETYPE_ADVERTISING#]</a> <a id="CybotCookiebotDialogDetailBodyContentCookieContainerUnclassified" href="#" class="CybotCookiebotDialogDetailBodyContentCookieContainerTypes" lang="[#LANGUAGE#]" aria-label="[#COOKIETYPE_UNCLASSIFIED#]"><label for="CybotCookiebotDialogDetailBodyContentCookieContainerUnclassified" aria-hidden="true">&thinsp;</label>[#COOKIETYPE_UNCLASSIFIED#]</a></div><div id="CybotCookiebotDialogDetailBodyContentCookieContainerTypeDetails"><div id="CybotCookiebotDialogDetailBodyContentCookieTabsNecessary"><div class="CybotCookiebotDialogDetailBodyContentCookieTypeIntro">[#COOKIETYPEINTRO_NECESSARY#]</div><div class="CybotCookiebotDialogDetailBodyContentCookieTypeTableContainer">[#COOKIETABLE_NECESSARY#]</div></div><div id="CybotCookiebotDialogDetailBodyContentCookieTabsPreference"><div class="CybotCookiebotDialogDetailBodyContentCookieTypeIntro">[#COOKIETYPEINTRO_PREFERENCE#]</div><div class="CybotCookiebotDialogDetailBodyContentCookieTypeTableContainer">[#COOKIETABLE_PREFERENCE#]</div></div><div id="CybotCookiebotDialogDetailBodyContentCookieTabsStatistics"><div class="CybotCookiebotDialogDetailBodyContentCookieTypeIntro">[#COOKIETYPEINTRO_STATISTICS#]</div><div class="CybotCookiebotDialogDetailBodyContentCookieTypeTableContainer">[#COOKIETABLE_STATISTICS#]</div></div><div id="CybotCookiebotDialogDetailBodyContentCookieTabsAdvertising"><div class="CybotCookiebotDialogDetailBodyContentCookieTypeIntro">[#COOKIETYPEINTRO_ADVERTISING#]</div><div class="CybotCookiebotDialogDetailBodyContentCookieTypeTableContainer">[#COOKIETABLE_ADVERTISING#]</div></div><div id="CybotCookiebotDialogDetailBodyContentCookieTabsUnclassified"><div class="CybotCookiebotDialogDetailBodyContentCookieTypeIntro">[#COOKIETYPEINTRO_UNCLASSIFIED#]</div><div class="CybotCookiebotDialogDetailBodyContentCookieTypeTableContainer">[#COOKIETABLE_UNCLASSIFIED#]</div></div></div></div></div><div id="CybotCookiebotDialogDetailBodyContentTextIABv2" lang="[#LANGUAGE#]"><div id="CybotCookiebotDialogDetailBodyContentIABContainer"><div id="CybotCookiebotDialogDetailBodyContentIABv2Tabs"><a id="CybotCookiebotDialogDetailBodyContentIABv2Purposes" href="#" class="CybotCookiebotDialogDetailBodyContentIABv2TabSelected" lang="[#LANGUAGE#]" aria-label="[#IABV2_LABEL_PURPOSES#]"><label for="CybotCookiebotDialogDetailBodyContentIABv2Purposes" aria-hidden="true">&thinsp;</label>[#IABV2_LABEL_PURPOSES#]</a> <a id="CybotCookiebotDialogDetailBodyContentIABv2Features" href="#" class="CybotCookiebotDialogDetailBodyContentIABv2Tab" lang="[#LANGUAGE#]" aria-label="[#IABV2_LABEL_FEATURES#]"><label for="CybotCookiebotDialogDetailBodyContentIABv2Features" aria-hidden="true">&thinsp;</label>[#IABV2_LABEL_FEATURES#]</a> <a id="CybotCookiebotDialogDetailBodyContentIABv2Partners" href="#" class="CybotCookiebotDialogDetailBodyContentIABv2Tab" lang="[#LANGUAGE#]" aria-label="[#IABV2_LABEL_PARTNERS#]"><label for="CybotCookiebotDialogDetailBodyContentIABv2Partners" aria-hidden="true">&thinsp;</label>[#IABV2_LABEL_PARTNERS#]</a></div><div id="CybotCookiebotDialogDetailBodyContentIABv2Details"><div id="CybotCookiebotDialogDetailBodyContentIABv2TabPurposes"><div class="CybotCookiebotDialogDetailBodyContentIABv2PurposesBody">[#IABV2_BODY_PURPOSES#]</div></div><div id="CybotCookiebotDialogDetailBodyContentIABv2TabFeatures"><div class="CybotCookiebotDialogDetailBodyContentIABv2FeaturesBody">[#IABV2_BODY_FEATURES#]</div></div><div id="CybotCookiebotDialogDetailBodyContentIABv2TabPartners"><div class="CybotCookiebotDialogDetailBodyContentIABv2PartnersBody">[#IABV2_BODY_PARTNERS#]</div></div></div></div></div><div id="CybotCookiebotDialogDetailBodyContentTextAbout" lang="[#LANGUAGE#]">[#COOKIESGENERALINTRO#]</div></div><div id="CybotCookiebotDialogDetailFooter" lang="[#LANGUAGE#]">[#LASTUPDATED#]</div></div></div></div>';
    this.addStyle('bottom', '#CybotCookiebotDialog{clip:auto;text-rendering:geometricPrecision;animation:none;animation-delay:0;animation-direction:normal;animation-duration:0;animation-fill-mode:none;animation-iteration-count:1;animation-name:none;animation-play-state:running;animation-timing-function:ease;backface-visibility:visible;background:0;background-attachment:scroll;background-clip:border-box;background-color:transparent;background-color:#000001;background-image:none;background-origin:padding-box;background-position:0 0;background-position-x:0;background-position-y:0;background-repeat:repeat;background-size:auto auto;border:0;border-bottom-left-radius:0;border-bottom-right-radius:0;border-collapse:separate;border-image:none;border-radius:0;border-spacing:0;border-top-color:inherit;border-top-left-radius:0;border-top-right-radius:0;border-top-style:none;border-top-width:medium;bottom:auto;box-shadow:none;box-shadow:2px 2px 14px 2px #121212;caption-side:top;clear:none;color:inherit;color:#000002;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-rule-color:currentColor;column-rule-style:none;column-rule-width:none;column-span:1;columns:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;display:inline;empty-cells:show;filter:Alpha(opacity=100);float:none;font:normal;font-family:inherit;font-family:Segoe UI,Arial,Helvetica,Verdana,sans-serif;font-size:medium;font-size:8pt;font-style:normal;font-variant:normal;font-weight:400;height:auto;hyphens:none;left:auto;left:0;letter-spacing:normal;line-height:normal;line-height:1.231;list-style:none;list-style-image:none;list-style-position:outside;list-style-type:disc;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:0;outline:0;outline-color:invert;outline-style:none;outline-width:medium;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0 0 8px;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;position:fixed;right:auto;tab-size:8;table-layout:auto;text-align:inherit;text-align:left;text-align-last:auto;text-decoration:none;text-decoration-color:inherit;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-shadow:none;text-transform:none;top:auto;top:-800px;transform:none;transform-style:flat;transition:none;transition-delay:0s;transition-duration:0s;transition-property:none;transition-timing-function:ease;vertical-align:baseline;visibility:visible;white-space:normal;widows:0;width:auto;width:100%;word-spacing:normal;z-index:auto;z-index:2147483645}#CybotCookiebotDialog,#CybotCookiebotDialog :after,#CybotCookiebotDialog :before,#CybotCookiebotDialog:after,#CybotCookiebotDialog:before,#CybotCookiebotDialogBody *,#CybotCookiebotDialogDetail *{box-sizing:content-box}#CybotCookiebotDialog[dir=rtl]{text-align:right}#CybotCookiebotDialog a{font-family:Segoe UI,Arial,Helvetica,Verdana,sans-serif;line-height:1.231}#CybotCookiebotDialog a,#CybotCookiebotDialog a:hover{color:#000002;text-decoration:underline}#CybotCookiebotDialog div{font-family:Segoe UI,Arial,Helvetica,Verdana,sans-serif;line-height:1.231}#CybotCookiebotDialog br,#CybotCookiebotDialog td{line-height:1.231}#CybotCookiebotDialogDetailBodyContentCookieContainerAdvertising,#CybotCookiebotDialogDetailBodyContentCookieContainerNecessary,#CybotCookiebotDialogDetailBodyContentCookieContainerPreference,#CybotCookiebotDialogDetailBodyContentCookieContainerStatistics,#CybotCookiebotDialogDetailBodyContentCookieContainerUnclassified{margin:0}#CybotCookiebotDialogPoweredbyLink{height:36px;margin-left:6px;margin-right:0;margin-top:12px;position:absolute;width:48px;z-index:2147483646}div[dir=rtl] #CybotCookiebotDialogPoweredbyLink{margin-left:0;margin-right:6px}#CybotCookiebotDialogPoweredbyImage{border:none;margin:2px 0 0 3px;padding:0;width:46px}#CybotCookiebotDialogBody{margin-left:auto;margin-right:auto;max-width:640px;overflow:hidden;padding-left:0;padding-right:8px;vertical-align:top}div[dir=rtl] #CybotCookiebotDialogBody{padding-left:8px;padding-right:0}#CybotCookiebotDialogBodyContent{font-size:9.5pt;font-weight:400;line-height:130%;min-height:32px;padding:12px 0 8px 80px}div[dir=rtl] #CybotCookiebotDialogBodyContent{padding-left:0;padding-right:80px}#CybotCookiebotDialogBodyContentControls{font-family:Segoe UI,Arial,Helvetica,Verdana,sans-serif;font-size:9.5pt;font-weight:400;line-height:130%;min-height:10px;padding:12px 0 8px 80px}div[dir=rtl] #CybotCookiebotDialogBodyContentControls{padding-left:0;padding-right:80px}.CybotCookiebotDialogBodyContentControlsWrapper{display:inline-block;line-height:16px;margin-left:0;margin-right:14px;position:relative}div[dir=rtl] .CybotCookiebotDialogBodyContentControlsWrapper{margin-left:14px;margin-right:0}#CybotCookiebotDialogBodyContentTitle{color:#000002;display:block;float:none;font-family:Segoe UI,Arial,Helvetica,Verdana,sans-serif;font-size:12pt;font-weight:700;letter-spacing:normal;line-height:100%;margin:2px 0 6px;padding:0;position:static;text-align:left;visibility:visible}div[dir=rtl] #CybotCookiebotDialogBodyContentTitle{text-align:right}#CybotCookiebotDialogBodyContentText{text-align:left}#CybotCookiebotDialogBodyContentText ul{display:block;list-style-type:disc;margin:1em 0 1.25em;padding:0 0 0 40px}#CybotCookiebotDialogBodyContentText ul li{display:list-item;list-style-type:disc;margin:0;padding:0}div[dir=rtl] #CybotCookiebotDialogBodyContentText{text-align:right}#CybotCookiebotDialogBodyButtons{display:block;margin:0 0 6px 6px;padding-left:63px;padding-right:0;z-index:10}div[dir=rtl] #CybotCookiebotDialogBodyButtons{margin:0 6px 6px 0;padding-left:0;padding-right:63px}#CybotCookiebotDialogBodyButtons a,#CybotCookiebotDialogBodyButtons a:hover{color:#000005;text-decoration:none}.CybotCookiebotDialogBodyButton{box-sizing:content-box;display:inline-block;font-size:9.5pt;font-weight:600;margin-left:12px;margin-right:0;margin-top:8px;min-width:80px;padding:2px 4px;text-align:center;white-space:nowrap;z-index:10}.CybotCookiebotDialogBodyButton:after,.CybotCookiebotDialogBodyButton:before{box-sizing:content-box}div[dir=rtl] .CybotCookiebotDialogBodyButton{margin-left:0;margin-right:12px}#CybotCookiebotDialogBodyButtonAccept{background-color:#000003;border:1px solid #000003}#CybotCookiebotDialogBodyButtonDecline{background-color:#000004;border:1px solid #000004}#CybotCookiebotDialogBodyButtons .CybotCookiebotDialogBodyLink,#CybotCookiebotDialogBodyLevelDetailsButton{background-image:url(showdetails.png);background-position:right 12px;background-position-x:right;background-position-y:12px;background-repeat:no-repeat;border-left:0;border-right:5px solid transparent;color:#000002;display:inline-block;font-size:9pt;margin-top:8px;padding:7px 19px 0 0;text-align:right;text-decoration:none}div[dir=rtl] #CybotCookiebotDialogBodyButtons .CybotCookiebotDialogBodyLink,div[dir=rtl] #CybotCookiebotDialogBodyLevelDetailsButton{background-position:left 12px;background-position-x:left;background-position-y:12px;border-left:5px solid transparent;border-right:0;padding-left:19px;padding-right:0}div[dir=rtl] #CybotCookiebotDialogBodyLevelDetailsButton{background-position:left 5px!important;background-position-x:left!important;background-position-y:5px!important}#CybotCookiebotDialogBodyButtons .CybotCookiebotDialogBodyLink:hover,#CybotCookiebotDialogBodyLevelDetailsButton:hover{color:#000002;text-decoration:underline}.CybotCookiebotDialogBodyLevelDetailsButtonExpanded,.CybotCookiebotDialogBodyLinkExpanded{background-image:url(hidedetails.png)!important}div[dir=rtl] .CybotCookiebotDialogBodyLevelDetailsButtonExpanded{background-position:left 5px!important;background-position-x:left!important;background-position-y:5px!important}a#CybotCookiebotDialogBodyLevelDetailsButton{background-position:right 5px;background-position-x:right;background-position-y:5px;color:#000002;line-height:16px;margin:1px 0 0;padding-left:4px;padding-top:0;text-align:left;text-decoration:none}div[dir=rtl] a#CybotCookiebotDialogBodyLevelDetailsButton{text-align:right}a#CybotCookiebotDialogBodyLevelDetailsButton:hover{color:#000002;text-decoration:none}#CybotCookiebotDialogBodyButtonDetails{display:inline-block;float:right;outline:none}div[dir=rtl] #CybotCookiebotDialogBodyButtonDetails{float:left}#CybotCookiebotDialogBodyButtonDetails:focus,#CybotCookiebotDialogBodyLevelDetailsButton:focus{text-decoration:underline}#CybotCookiebotDialogBodyLevelWrapper{display:none;pointer-events:none;text-align:right}div[dir=rtl] #CybotCookiebotDialogBodyLevelWrapper{text-align:left}#CybotCookiebotDialogBodyLevelButtons{float:left;font-size:9pt;margin-left:8px;margin-right:0;pointer-events:auto}div[dir=rtl] #CybotCookiebotDialogBodyLevelButtons{float:right;margin-left:0;margin-right:8px}#CybotCookiebotDialogBodyLevelButtonsTable{display:inline-table;margin:5px 0}div[dir=rtl] #CybotCookiebotDialogBodyLevelButtonsTable{margin-left:16px;margin-right:0}#CybotCookiebotDialogBodyLevelButtonsRow{display:table-row}#CybotCookiebotDialogBodyLevelButtonsSelectPane{border:1px solid #000008;-webkit-border-radius:4px 0 0 4px;-moz-border-radius:4px 0 0 4px;border-radius:4px 0 0 4px;display:table-cell;padding:4px 3px 3px 9px;text-align:left;vertical-align:top}div[dir=rtl] #CybotCookiebotDialogBodyLevelButtonsSelectPane{-webkit-border-radius:0 4px 4px 0;-moz-border-radius:0 4px 4px 0;border-radius:0 4px 4px 0;text-align:right}#CybotCookiebotDialogBodyLevelButtonAcceptWrapper{display:inline-block;float:right;margin-left:0;margin-right:0;pointer-events:auto}div[dir=rtl] #CybotCookiebotDialogBodyLevelButtonAcceptWrapper{display:inline-block;float:left;margin-left:0;margin-right:0}a#CybotCookiebotDialogBodyLevelButtonAccept{background-color:#000003;border:1px solid #000003;color:#000005;display:inline-block;font-size:9.5pt;font-weight:600;margin-left:0;margin-right:0;margin-top:6px;min-width:80px;padding:3px 10px;text-align:center;text-decoration:none;white-space:nowrap;z-index:10}a#CybotCookiebotDialogBodyLevelButtonAccept:hover{color:#000005;text-decoration:none}#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelectionWrapper{display:inline-block;float:right;margin-left:0;margin-right:0;padding-bottom:2px;pointer-events:auto}div[dir=rtl] #CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelectionWrapper{display:inline-block;float:left;margin-left:0;margin-right:0;padding-bottom:2px}a#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll,a#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection,a#CybotCookiebotDialogBodyLevelButtonLevelOptinDeclineAll{color:#000005;display:inline-block;font-size:9.5pt;font-weight:600;height:16px;margin-top:6px;padding:2px 4px;text-align:center;text-decoration:none;white-space:nowrap;z-index:10}a#CybotCookiebotDialogBodyLevelButtonLevelOptinDeclineAll{background-color:#000004;border:1px solid #000004}a#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll{background-color:#000003;border:1px solid #000003}a#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection{background-color:#000009;border:1px solid #000009}a#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll:hover,a#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection:hover,a#CybotCookiebotDialogBodyLevelButtonLevelOptinDeclineAll:hover{color:#000005;text-decoration:none}.CybotCookiebotDialogBodyLevelButtonWrapper{display:inline-block;line-height:16px;margin-left:0;margin-right:14px;position:relative}div[dir=rtl] .CybotCookiebotDialogBodyLevelButtonWrapper{margin-left:14px;margin-right:0}.CybotCookiebotDialogBodyLevelButtonWrapper:last-of-type{margin-left:0;margin-right:7px}div[dir=rtl] .CybotCookiebotDialogBodyLevelButtonWrapper:last-of-type{margin-left:7px;margin-right:0}.CybotCookiebotDialogBodyLevelButtonWrapper label{white-space:nowrap}input[type=checkbox].CybotCookiebotDialogBodyLevelButton{cursor:pointer;left:0;opacity:0;position:absolute;top:0;z-index:2}input[type=checkbox].CybotCookiebotDialogBodyLevelButton+label:after,input[type=checkbox].CybotCookiebotDialogBodyLevelButton+label:before{content:normal}input [type=checkbox].CybotCookiebotDialogBodyLevelButton.CybotCookiebotDialogBodyLevelButtonDisabled{cursor:default}input[type=checkbox].CybotCookiebotDialogBodyLevelButton+label{background-image:url(NotCheckedNoFocus.png);background-position:left 1px;background-repeat:no-repeat;color:inherit;cursor:pointer;display:inline-block;font-size:inherit;height:auto;left:0;line-height:16px;margin-bottom:0;margin-top:0;min-height:14px;padding:1px 0 0 17px;position:relative;top:0;vertical-align:top;width:auto;z-index:1}div[dir=rtl] input[type=checkbox].CybotCookiebotDialogBodyLevelButton+label{background-position:right 1px;padding:2px 17px 0 0}input[type=checkbox].CybotCookiebotDialogBodyLevelButton:checked+label{background-image:url(CheckedNofocus.png);background-position:left 1px;background-repeat:no-repeat;display:inline-block;height:auto;line-height:16px;min-height:14px;padding:1px 0 0 17px;vertical-align:top;width:auto}div[dir=rtl] input[type=checkbox].CybotCookiebotDialogBodyLevelButton:checked+label{background-position:right 1px;padding:2px 17px 0 0}input[type=checkbox].CybotCookiebotDialogBodyLevelButton.CybotCookiebotDialogBodyLevelButtonDisabled+label{background-image:url(CheckedDisabled.png);background-position:left 1px;background-repeat:no-repeat;cursor:default;display:inline-block;height:auto;left:0;line-height:16px;min-height:14px;padding:1px 0 0 17px;position:relative;top:0;vertical-align:top;width:auto;z-index:1}div[dir=rtl] input[type=checkbox].CybotCookiebotDialogBodyLevelButton.CybotCookiebotDialogBodyLevelButtonDisabled+label{background-position:right 1px;padding:2px 17px 0 0}input[type=checkbox].CybotCookiebotDialogBodyLevelButton:focus+label{background-image:url(NotCheckedFocus.png);background-position:left 1px;background-repeat:no-repeat;display:inline-block;height:auto;line-height:16px;min-height:14px;padding:1px 0 0 17px;vertical-align:top;width:auto}div[dir=rtl] input[type=checkbox].CybotCookiebotDialogBodyLevelButton:focus+label{background-position:right 1px;padding:2px 17px 0 0}input[type=checkbox].CybotCookiebotDialogBodyLevelButton:checked:focus+label{background-image:url(CheckedFocus.png);background-position:left 1px;background-repeat:no-repeat;display:inline-block;height:auto;line-height:16px;min-height:14px;padding:1px 0 0 17px;vertical-align:top;width:auto}div[dir=rtl] input[type=checkbox].CybotCookiebotDialogBodyLevelButton:checked:focus+label{background-position:right 1px;padding:2px 17px 0 0}#CybotCookiebotDialogBodyLevelDetailsWrapper{background-color:#000006;border:1px solid #000008;border-left:none;cursor:pointer;display:table-cell;height:14px;padding:4px 0 4px 4px;text-align:left;vertical-align:top}div[dir=rtl] #CybotCookiebotDialogBodyLevelDetailsWrapper{border:1px solid #000008;border-right:none;padding:4px 4px 4px 0;text-align:right}#CybotCookiebotDialogDetail{background-color:#000001;display:none;overflow:auto;padding-bottom:1px;padding-top:0}#CybotCookiebotDialogDetailBody{margin-left:auto;margin-right:auto;max-width:632px;vertical-align:top;width:100%}div[dir=rtl] #CybotCookiebotDialogDetailBody{text-align:right}#CybotCookiebotDialogDetailBodyContent{background-color:#000001;border:solid #000008;border-width:1px 1px 4px;color:#000002;height:170px}#CybotCookiebotDialogDetailBodyContent a{font-size:9pt}#CybotCookiebotDialogDetailBodyContentTabs a{font-size:10.5pt}#CybotCookiebotDialogDetailBodyContentText{font-size:10pt;padding:8px}#CybotCookiebotDialogDetailBodyContentTabs{display:inline-block;height:auto;position:relative;white-space:nowrap}a.CybotCookiebotDialogDetailBodyContentTabsItem{margin:0;text-decoration:none!important}a.CybotCookiebotDialogDetailBodyContentTabsItem:focus,a.CybotCookiebotDialogDetailBodyContentTabsItem:hover{background-color:#000001!important;border-right:1px solid #000008;border-top:1px solid #000008;color:#000002!important;opacity:.9;text-decoration:none!important}a.CybotCookiebotDialogDetailBodyContentTabsItemSelected{color:#000002!important;margin:0;opacity:1;text-decoration:none!important}a.CybotCookiebotDialogDetailBodyContentTabsItemSelected:focus,a.CybotCookiebotDialogDetailBodyContentTabsItemSelected:hover{border-right:1px solid #000008;border-top:1px solid #000008;color:#000002!important;cursor:default;text-decoration:none!important}.CybotCookiebotDialogDetailBodyContentTabsItem{background:#000006;border-right:1px solid #000008;border-top:1px solid #000008;color:#000002!important;cursor:pointer;display:inline-block;font-size:10.5pt;font-weight:400;line-height:100%;margin:1px 0 0;opacity:.85;padding:7px 18px 5px;position:relative;top:1px;white-space:normal;z-index:10}.CybotCookiebotDialogDetailBodyContentTabsItem:first-of-type{border-left:1px solid #000008}.CybotCookiebotDialogDetailBodyContentTabsItemSelected{background:#000001;border-right:1px solid #000008;border-top:1px solid #000008;color:#000002;display:inline-block;font-size:10.5pt;font-weight:400;line-height:100%;opacity:1;padding:8px 18px 6px;position:relative;top:1px;white-space:normal;z-index:10}.CybotCookiebotDialogDetailBodyContentTab:first-child{border-left:1px solid #000008;-webkit-border-radius:4px 0 0 0;-moz-border-radius:4px 0 0 0;border-radius:4px 0 0 0}div[dir=rtl] .CybotCookiebotDialogDetailBodyContentTab:first-child{border-left:none;-webkit-border-radius:0 4px 0 0;-moz-border-radius:0 4px 0 0;border-radius:0 4px 0 0}.CybotCookiebotDialogDetailBodyContentTab{border-left:none}div[dir=rtl] .CybotCookiebotDialogDetailBodyContentTab{border-left:1px solid #000008}#CybotCookiebotDialogDetailFooter{background-color:#000001;color:#000002;opacity:.85;padding-right:2px;padding-top:4px;text-align:right}div[dir=rtl] #CybotCookiebotDialogDetailFooter{text-align:left}#CybotCookiebotDialogDetailFooter a{color:#000002}#CybotCookiebotDialogDetailBodyContentTextAbout{display:none;font-size:9pt;height:140px;overflow:auto;padding:18px 12px 12px}#CybotCookiebotDialogDetailBodyContentTextOverview{display:inline-block}#CybotCookiebotDialogDetailBodyContentTextIABv2{word-wrap:break-word;display:none;text-overflow:ellipsis}#CybotCookiebotDialogDetailBodyContentTabsIABv2,#CybotCookiebotDialogDetailBodyContentTextIABv2{display:none}#CybotCookiebotDialogDetailBodyContentCookieContainerTypes,#CybotCookiebotDialogDetailBodyContentIABv2Tabs{background-color:#000006;float:left;font-size:9pt;padding:0;white-space:nowrap}div[dir=rtl] #CybotCookiebotDialogDetailBodyContentCookieContainerTypes,div[dir=rtl] #CybotCookiebotDialogDetailBodyContentIABv2Tabs{float:right}#CybotCookiebotDialogDetailBodyContentCookieContainerTypeDetails,#CybotCookiebotDialogDetailBodyContentIABv2Details{font-size:9pt;height:146px;max-height:146px;overflow:auto;padding:12px}.CybotCookiebotDialogDetailBodyContentCookieContainerTypesSelected,.CybotCookiebotDialogDetailBodyContentIABv2TabSelected{background-color:#000001;border-bottom:1px solid #000008;border-left:none;border-right:1px solid #000001;color:#000002!important;display:block;padding:8px;text-decoration:none!important}div[dir=rtl] .CybotCookiebotDialogDetailBodyContentCookieContainerTypesSelected,div[dir=rtl] .CybotCookiebotDialogDetailBodyContentIABv2TabSelected{border-left:1px solid #000001;border-right:none}.CybotCookiebotDialogDetailBodyContentCookieContainerTypes,.CybotCookiebotDialogDetailBodyContentIABv2Tab{background-color:#000006;border-bottom:1px solid #000008;border-left:none;border-right:1px solid #000008;color:#000002!important;cursor:pointer;display:block;opacity:1;padding:8px;text-decoration:none!important}.CybotCookiebotDialogDetailBodyContentCookieContainerTypes:first-child,.CybotCookiebotDialogDetailBodyContentIABv2Tab:first-child{border-top:1px solid #000008}.CybotCookiebotDialogDetailBodyContentCookieContainerTypesSelected:first-child{border-top:1px solid #000001}#CybotCookiebotDialogDetailBodyContentIABv2Tabs a:first-child{border-top:0}.CybotCookiebotDialogDetailBodyContentCookieContainerTypes label,.CybotCookiebotDialogDetailBodyContentCookieContainerTypesSelected label,.CybotCookiebotDialogDetailBodyContentIABv2Tab label,.CybotCookiebotDialogDetailBodyContentIABv2TabSelected label{cursor:pointer;display:none;margin:0}div[dir=rtl] .CybotCookiebotDialogDetailBodyContentCookieContainerTypes,div[dir=rtl] .CybotCookiebotDialogDetailBodyContentIABv2Tab{border-left:1px solid #000008;border-right:none}a.CybotCookiebotDialogDetailBodyContentCookieContainerTypes:focus,a.CybotCookiebotDialogDetailBodyContentCookieContainerTypes:hover,a.CybotCookiebotDialogDetailBodyContentIABv2Tab:focus,a.CybotCookiebotDialogDetailBodyContentIABv2Tab:hover{background:#000001!important;border-bottom:1px solid #000008;border-left:none;border-right:1px solid #000008;color:#000002!important;opacity:1;text-decoration:none!important}a.CybotCookiebotDialogDetailBodyContentCookieContainerTypesSelected:focus,a.CybotCookiebotDialogDetailBodyContentCookieContainerTypesSelected:hover,a.CybotCookiebotDialogDetailBodyContentIABv2TabSelected:focus,a.CybotCookiebotDialogDetailBodyContentIABv2TabSelected:hover{border-bottom:1px solid #000008;border-left:none;border-right:1px solid #000001;color:#000002!important;cursor:default;text-decoration:none!important}#CybotCookiebotDialogDetailBodyContentCookieTabsAdvertising,#CybotCookiebotDialogDetailBodyContentCookieTabsPreference,#CybotCookiebotDialogDetailBodyContentCookieTabsStatistics,#CybotCookiebotDialogDetailBodyContentCookieTabsUnclassified,#CybotCookiebotDialogDetailBodyContentIABv2TabFeatures,#CybotCookiebotDialogDetailBodyContentIABv2TabPartners{display:none}.CybotCookiebotDialogBodyLevelButtonIABContainer,.CybotCookiebotDialogBodyLevelButtonIABContainerCollapsed{border:1px solid #ccc;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;margin-bottom:8px;overflow:hidden;padding:4px 4px 4px 8px}.CybotCookiebotDialogBodyLevelButtonIABContainerCollapsed{height:18px}.CybotCookiebotDialogBodyLevelButtonIABContainerToggleShow{background-image:url(showdetails.png);background-position:left 6px;background-position-x:left;background-position-y:6px;background-repeat:no-repeat;display:inline-block;float:right;height:20px;position:relative;width:16px}.CybotCookiebotDialogBodyLevelButtonIABContainerToggleHide{background-image:url(hidedetails.png);background-position:left 6px;background-position-x:left;background-position-y:6px;background-repeat:no-repeat;display:inline-block;float:right;height:20px;position:relative;width:16px}.CybotCookiebotDialogDetailBodyContentCookieTypeTable{border-collapse:collapse;border-spacing:0;font-size:9pt;margin:8px 0 0;padding:0;width:100%}.CybotCookiebotDialogDetailBodyContentCookieTypeTable thead td,.CybotCookiebotDialogDetailBodyContentCookieTypeTable thead th{background-color:#000006!important;border-bottom:1px solid #000008;color:#000002!important;font-weight:400;padding:2px;text-align:left;vertical-align:top}div[dir=rtl] .CybotCookiebotDialogDetailBodyContentCookieTypeTable thead td,div[dir=rtl] .CybotCookiebotDialogDetailBodyContentCookieTypeTable thead th{text-align:right}.CybotCookiebotDialogDetailBodyContentCookieTypeTable tbody td{border-bottom:1px solid #000008;border-right:1px solid #000006;color:#000002!important;font-size:9pt;max-width:72px;overflow:hidden;padding:4px;text-align:left;vertical-align:top}.CybotCookiebotDialogDetailBodyContentCookieTypeTable tbody td:last-child{border-right:0}div[dir=rtl] .CybotCookiebotDialogDetailBodyContentCookieTypeTable tbody td{text-align:right}.CybotCookiebotDialogDetailBodyContentCookieTypeTable tbody td.CybotCookiebotDialogDetailBodyContentCookieTypeTableEmpty{border:none;border-top:1px solid #000008;padding:4px 0 0}#CybotCookiebotDialogBodyIABIntro,.CybotCookiebotDialogBodyIABIntroContainer{margin-bottom:12px}.CybotCookiebotDialogBodyLevelButtonIABHeader{font-weight:700;text-transform:uppercase}.CybotCookiebotDialogBodyLevelButtonIABHeader,.CybotCookiebotDialogBodyLevelSectionIAB{border-top:1px solid #000008;margin-bottom:12px;margin-top:2px;padding-top:8px}.CybotCookiebotDialogBodyLevelButtonIABDescription{margin-bottom:12px;margin-top:8px}.CybotCookiebotDialogBodyLevelButtonIABLabel{font-weight:700}ul.CybotCookiebotDialogBodyLevelButtonIABBullet{list-style-type:disc;margin:3px 0 0;padding-inline-start:18px}.CybotCookiebotDialogBodyLevelButtonIABHeaderToggle{float:right}.CybotCookiebotDialogBodyContentLabelPersonalInformation{font-weight:400!important}');
}
var CookiebotDialog, CookieConsentDialog;
CookiebotDialog = CookieConsentDialog = new CookieControl.Dialog(CookieConsent, 'bottom_dark', 'Your privacy matters', 'Cookies and similar technologies are used on our sites to personalise content and ads, provide and improve product features and to analyse traffic on our sites by Envato, our business partners and authors. You can find further details below. By continuing to use our sites and services, you agree to the use of these cookies and similar technologies.', 'OK', 'Use necessary cookies only', 'optin', null, false, 'strict', 'en', '<p style="">Cookies, clear gifs and similar technologies (<strong style="">cookies</strong>) are used on our sites to personalise content and ads, provide and improve product features and to analyse our traffic on our sites by Envato, our business partners and authors. As a part of our commitment to upholding a high standard of transparency with our users, we&rsquo;ve created this guide to explain the tracking technologies we use on our sites.</p><p style="">&nbsp;</p><p style=""><strong style="">What are cookies, clear gifs and similar technologies? </strong></p><p style=""><strong style=""></strong><strong style=""></strong></p><p style=""><strong style="">Cookies</strong> are a small data file sent to your web browser or mobile device that is stored on your browser cache.</p><p style="">&nbsp;</p><p style=""><strong style="">Clear gifs and pixel trackers</strong> are tiny graphics with a unique identifier and are similar in function to cookies, and are used to track the movements of web users between pages and websites. They are embedded invisibly on web pages and are about the size of a single pixel.</p><p style="">&nbsp;</p><p style=""><strong style="">First party cookies</strong> are set by us when you&rsquo;re visiting one of our sites, and <strong style="">third party cookies</strong> are set by a party other than the website you&rsquo;re visiting.</p><p style="">&nbsp;</p><p style="">Cookies and similar technologies are used for the following purposes on the Envato sites.</p><p style=""><strong style="">&nbsp;</strong></p><p style=""><strong style="">Strictly Necessary: </strong>Strictly necessary cookies help make a website usable by enabling basic functions like page navigation, website security and access to information that requires authentication. </p><p style="">&nbsp;</p><p style=""><strong style="">Preferences: </strong>These cookies enable storage of information that changes the way a website behaves or looks, like settings for your region. Statistics: Statistics cookies help us to understand how visitors interact with our websites by collecting and reporting information.</p><p style="">&nbsp;</p><p style=""><strong style="">Marketing:</strong> Marketing cookies are used for tracking browsing activity and to customise and display ads that are relevant and engaging.</p><p style="">&nbsp;</p><p style=""><strong style="">Third Parties:</strong> Our business partners and authors use cookies for the purposes </p><p style="">described above.</p><p style=""><strong style="">&nbsp;</strong></p><p style=""><strong style="">How to manage your preferences and settings</strong></p><p style="">Please keep in mind that your experience may not be as we intended if you change the standard settings. </p><p style="">&nbsp;</p><p style="">Visitors located in the European Union can select their preferences with the preferences panel, and can change their preferences by clearing their cookies, refreshing the page, and selecting their preferences again. </p><p style="">&nbsp;</p><p style="">Any interested visitor can learn how to opt out of third party cookies by consulting <a href="http://optout.networkadvertising.org/?c=1" style="">this page</a>&nbsp;or learn how to change your browser settings: </p><p style="">&nbsp;</p><p style=""><a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" style="">Firefox</a> </p><p style=""><a href="https://support.google.com/chrome/answer/95647?hl=en" style="">Chrome</a> </p><p style=""><a href="https://support.apple.com/en-us/HT201265" style="">Safari</a></p><p style="">&nbsp;</p><p style=""><strong style="">Contact, questions and changes</strong></p><p style="">We may make changes to the Cookie Policy from time to time and we will take reasonable steps to let our users know about these changes. You can keep track of changes made by referring to the date below.</p><p style="">&nbsp;</p><p style="">If you have any questions about our privacy practices, or about how to change your cookie preferences, please contact our privacy champion at privacy.champion@envato.com. You can also write to us at PO Box 16122 Collins Street West Victoria 8007 Australia. </p><p style="">&nbsp;</p><p style="">Updated 14 June 2019.  </p>', 'Strictly necessary cookies help make a website usable by enabling basic functions like page navigation, website security and access to information that requires authentication.  ', 'These cookies enable storage of information that changes the way a website behaves or looks, like settings for your region.  ', 'Statistics cookies help us to understand how visitors interact with our websites by collecting and reporting information.', 'Marketing cookies are used for tracking browsing activity and to customise and display ads that are relevant and engaging.', 'Unclassified cookies are cookies that we are in the process of classifying, together with the providers of individual cookies.', 'OK', 'Allow all cookies', 'Allow selection', '', 'Hide details', 'Show details', 'Customize');
CookieConsentDialog.noCookiesTypeText = 'We do not use cookies of this type.';
CookieConsentDialog.aboutCookiesText = 'About';
CookieConsentDialog.cookiesOverviewText = 'Cookie declaration';
CookieConsentDialog.cookieHeaderTypeNecessary = 'Strictly Necessary ({0})';
CookieConsentDialog.cookieHeaderTypePreference = 'Preferences ({0})';
CookieConsentDialog.cookieHeaderTypeStatistics = 'Statistics ({0})';
CookieConsentDialog.cookieHeaderTypeAdvertising = 'Marketing ({0})';
CookieConsentDialog.cookieHeaderTypeUnclassified = 'Unclassified ({0})';
CookieConsentDialog.cookieTableHeaderName = 'Name';
CookieConsentDialog.cookieTableHeaderProvider = 'Provider';
CookieConsentDialog.cookieTableHeaderPurpose = 'Purpose';
CookieConsentDialog.cookieTableHeaderType = 'Type';
CookieConsentDialog.cookieTableHeaderExpiry = 'Expiry';
CookieConsentDialog.bulkconsentDomainsString = 'Your consent applies to the following domains: build.envato.com, preview.codecanyon.net, preview.themeforest.net, envato.com, studiosupport.envato.com, help.author.envato.com, help.elements.envato.com, help.market.envato.com, webdesign.tutsplus.com, photography.tutsplus.com, music.tutsplus.com, gamedevelopment.tutsplus.com, email.tutsplus.com, design.tutsplus.com, crafts.tutsplus.com, computers.tutsplus.com, code.tutsplus.com, cgi.tutsplus.com, business.tutsplus.com, tutsplus.com';
CookieConsentDialog.impliedConsentOnScroll = false;
CookieConsentDialog.impliedConsentOnRefresh = false;
CookieConsentDialog.showLogo = false;
CookieConsentDialog.mandatoryText = 'Mandatory - can not be deselected.';
CookieConsentDialog.logoAltText = 'logo';
CookieConsentDialog.customImages.showdetails = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAGCAMAAAAmGUT3AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkI3NDEyNDEwNzk0MjExRTQ5RUE5RkRFMUQ3MEU1NTZDIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkI3NDEyNDExNzk0MjExRTQ5RUE5RkRFMUQ3MEU1NTZDIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Qjc0MTI0MEU3OTQyMTFFNDlFQTlGREUxRDcwRTU1NkMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Qjc0MTI0MEY3OTQyMTFFNDlFQTlGREUxRDcwRTU1NkMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz70ohqeAAAABlBMVEVgYGAAAAAPhzbbAAAAAnRSTlP/AOW3MEoAAAAjSURBVHjaYmBkYAQBBkYGIAAxQBQcQ/ggCiLFCGFBCIAAAwADkwAg7Yr51AAAAABJRU5ErkJggg==';
CookieConsentDialog.customImages.hidedetails = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAGCAYAAAARx7TFAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjU0QzAwODExNzk0MjExRTQ4QzBERTBGMTkxMUY2M0M0IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjU0QzAwODEyNzk0MjExRTQ4QzBERTBGMTkxMUY2M0M0Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NTRDMDA4MEY3OTQyMTFFNDhDMERFMEYxOTExRjYzQzQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NTRDMDA4MTA3OTQyMTFFNDhDMERFMEYxOTExRjYzQzQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz576KdnAAAATklEQVR42kyO2xEAMQgCJZ3afxFcyGRz+uMD3EHdXbYrJSltrz4Dt4UBNfsWPG614oRwO2Q/Eg+IwvnDj8kjk+48MzmZeNYI/4jRPwEGAFy/MS7NcXxJAAAAAElFTkSuQmCC';
CookieConsentDialog.prechecked.preferences = true;
CookieConsentDialog.prechecked.statistics = true;
CookieConsentDialog.prechecked.marketing = true;
CookieConsentDialog.optionaloptinSettings.displayConsentBanner = false;
CookieConsentDialog.bannerCloseButtonEnabled = false;
CookieConsentDialog.lastUpdatedText = 'Cookie declaration last updated on {0} by <a href="https://www.cookiebot.com" target="_blank" rel="noopener" title="Cookiebot">Cookiebot</a>';
CookieConsentDialog.lastUpdatedDate = 1620055511760;
CookieConsentDialog.cookieTableNecessary = [
    ["c", "admedo.com<br/>creative-serving.com<br/>scoota.co<br/>sportradarserving.com<br/>bidswitch.net", "Used in order to detect spam and improve the website's security. Does not store  visitor specific data.", "1 year", "HTTP", "1", "", "pool.admedo.com<br/>creative-serving.com<br/>scoota.co<br/>sportradarserving.com<br/>x.bidswitch.net"],
    ["dt", "adsafeprotected.com", "Used by the website to detect any fraud and ensure brand safety management on the website.  ", "Session", "Pixel", "5", "", "dt.adsafeprotected.com"],
    ["pr", "adtdp.com", "Preserves the visitor's session state across page requests.", "399 days", "HTTP", "1", "", "adtdp.com"],
    ["checkForPermission", "bidr.io", "Determines whether the user has accepted the cookie consent box. ", "1 day", "HTTP", "1", "", "bidr.io"],
    ["CookieConsent", "build.envato.com<br/>business.tutsplus.com<br/>cgi.tutsplus.com<br/>code.tutsplus.com<br/>computers.tutsplus.com<br/>crafts.tutsplus.com<br/>design.tutsplus.com<br/>email.tutsplus.com<br/>envato.com<br/>gamedevelopment.tutsplus.com<br/>help.author.envato.com<br/>help.elements.envato.com<br/>help.market.envato.com<br/>music.tutsplus.com<br/>photography.tutsplus.com<br/>studiosupport.envato.com<br/>tutsplus.com<br/>webdesign.tutsplus.com", "Stores the user's cookie consent state for the current domain", "1 year", "HTTP", "1", "", "cookiebot.com"],
    ["__cfruid", "cdpn.io<br/>change.org<br/>codepen.io<br/>envatomarketplaces.zendesk.com<br/>help.author.envato.com<br/>help.elements.envato.com<br/>help.market.envato.com<br/>studiosupport.envato.com", "This cookie is a part of the services provided by Cloudflare - Including load-balancing, deliverance of website content and serving DNS connection for website operators. ", "Session", "HTTP", "1", "", "cdpn.io<br/>change.org<br/>envatomarketplaces.zendesk.com<br/>help.author.envato.com"],
    ["lessonWatchTracking", "cgi.tutsplus.com<br/>code.tutsplus.com<br/>design.tutsplus.com<br/>photography.tutsplus.com<br/>webdesign.tutsplus.com<br/>business.tutsplus.com<br/>computers.tutsplus.com<br/>music.tutsplus.com", "Pending", "Persistent", "HTML", "2", "", "static.tutsplus.com"],
    ["__cf_bm", "codepen.io<br/>codesandbox.io<br/>conrad.de<br/>envato.com<br/>help.author.envato.com<br/>help.elements.envato.com<br/>help.market.envato.com<br/>pexels.com<br/>radar.cloudflare.com<br/>studiosupport.envato.com<br/>vimeo.com", "This cookie is used to distinguish between humans and bots. This is beneficial for the website, in order to make valid reports on the use of their website.", "1 day", "HTTP", "1", "", "codepen.io<br/>codesandbox.io<br/>www.conrad.de<br/>build.envato.com<br/>pexels.com<br/>radar.cloudflare.com<br/>vimeo.com"],
    ["algoliasearch-client-js", "codepen.io", "Necessary in order to optimize the website's search-bar function. The cookie ensures accurate and fast search results.", "Persistent", "HTML", "2", "", "codepen.io"],
    ["INGRESSCOOKIE", "contextweb.com", "Registers which server-cluster is serving the visitor. This is used in context with load balancing, in order to optimize user experience.  ", "Session", "HTTP", "1", "", "bh.contextweb.com"],
    ["cid", "ctnsnet.com", "This cookie is necessary for making credit card transactions on the website. The service is provided by Stripe.com which allows online transactions without storing any credit card information. ", "1 year", "HTTP", "1", "", "ctnsnet.com"],
    ["AWSALBCORS", "endpoint1.collection.us2.sumologic.com<br/>formstack.com", "Registers which server-cluster is serving the visitor. This is used in context with load balancing, in order to optimize user experience.  ", "6 days", "HTTP", "1", "", "endpoint1.collection.us2.sumologic.com<br/>static.formstack.com"],
    ["_ce.cch", "envato.com", "Stores the user's cookie consent state for the current domain", "Session", "HTTP", "1", "", "www.envato.com"],
    ["ajs_user_id", "envato.com<br/>tutsplus.com", "Segment cookie for 2019 CDP trial", "1 year", "HTTP", "1", "", "envato.com"],
    ["ce_successful_csp_check", "envato.com", "Detects whether user behaviour tracking should be active on the website. ", "Persistent", "HTML", "2", "", "www.envato.com"],
    ["cybermonday2019_cart", "envato.com", "Client-side shopping cart for cyber monday 2019 campaign", "Persistent", "HTML", "2", "", "envato.com"],
    ["envato_c_cart", "envato.com", "Client-side shopping cart for envato/marketing-campaigns repo", "Persistent", "HTML", "2", "", "envato.com"],
    ["envato_c_cart_items", "envato.com", "Pending", "1 year", "HTML", "1", "", "envato.com"],
    ["is_eu", "envato.com", "Determines whether the user is located within the EU and therefore is subject to EU's data privacy regulations. ", "Session", "HTML", "2", "", "www.envato.com"],
    ["AWSALB", "formstack.com", "Registers which server-cluster is serving the visitor. This is used in context with load balancing, in order to optimize user experience.  ", "6 days", "HTTP", "1", "", "static.formstack.com"],
    ["PHPSESSID", "formstack.com", "Preserves user session state across page requests.", "Session", "HTTP", "1", "^PHPSESSID.*$", "formstack.com"],
    ["CONSENT", "google.com<br/>youtube.com<br/>youtube-nocookie.com", "Used to detect if the visitor has accepted the marketing category in the cookie banner. This cookie is necessary for GDPR-compliance of the website.  ", "2 years", "HTTP", "1", "", "play.google.com<br/>youtube.com"],
    ["rc::a", "google.com", "This cookie is used to distinguish between humans and bots. This is beneficial for the website, in order to make valid reports on the use of their website.", "Persistent", "HTML", "2", "", "google.com"],
    ["rc::c", "google.com", "This cookie is used to distinguish between humans and bots. ", "Session", "HTML", "2", "", "google.com"],
    ["rc::e", "google.com", "This cookie is used to distinguish between humans and bots. ", "Session", "HTML", "2", "", "adservice.google.com"],
    ["_help_center_session", "help.author.envato.com<br/>help.elements.envato.com<br/>help.market.envato.com<br/>studiosupport.envato.com", "Preserves users states across page requests.", "Session", "HTTP", "1", "", "help.author.envato.com"],
    ["cf_use_ob", "help.author.envato.com<br/>help.market.envato.com", "Used to detect if the website is inaccessible, in case of maintenance of content updates - The cookie allows the website to present the visitor with a notice on the issue in question.", "1 day", "HTTP", "1", "", "help.author.envato.com"],
    ["cu", "ipredictive.com", "Used to detect if the visitor has accepted the marketing category in the cookie banner. This cookie is necessary for GDPR-compliance of the website.  ", "1 year", "HTTP", "1", "", "ipredictive.com"],
    ["JSESSIONID", "linkedin.com<br/>nr-data.net<br/>turn.com", "Preserves users states across page requests.", "Session", "HTTP", "1", "", "linkedin.com<br/>nr-data.net<br/>presentation-ams1.turn.com"],
    ["li_gc", "linkedin.com", "Stores the user's cookie consent state for the current domain", "179 days", "HTTP", "1", "", "linkedin.com"],
    ["ASP.NET_SessionId", "pb.media01.eu", "Preserves the visitor's session state across page requests.", "Session", "HTTP", "1", "", "pb.media01.eu"],
    ["SERVERID#", "pv.medialead.de", "Pending", "Session", "HTTP", "1", "", "pv.medialead.de"],
    ["audit", "rubiconproject.com", "Determines whether the visitor has accepted the cookie consent box. This ensures that the cookie consent box will not be presented again upon re-entry.  ", "1 year", "HTTP", "1", "", "rubiconproject.com"],
    ["_abck", "tiktok.com", "Used to detect and defend against replay-cookie-attacks – The cookie is necessary for the security and integrity of the website. ", "1 year", "HTTP", "1", "", "www.tiktok.com"],
    ["bm_sz", "tiktok.com", "Used in context with the website's BotManager. The BotManager detects, categorizes and compiles reports on potential bots trying to access the website.", "1 day", "HTTP", "1", "", "www.tiktok.com"],
    ["_tuts_session", "tutsplus.com", "Pending", "14 days", "HTTP", "1", "", "webdesign.tutsplus.com"],
    ["cookies.js_dtest", "tutsplus.com", "This cookie determines whether the browser accepts cookies.", "Session", "HTTP", "1", "", "webdesign.tutsplus.com"],
    ["redirect_after_sign_in_url", "tutsplus.com", "Pending", "Session", "HTTP", "1", "", "tutsplus.com"]
];
CookieConsentDialog.cookieTablePreference = [
    ["lang", "ads.linkedin.com<br/>linkedin.com", "Remembers the user's selected language version of a website", "Session", "HTTP", "1", "", "ads.linkedin.com"],
    ["@@scroll#", "build.envato.com<br/>envato.com", "Pending", "Session", "HTML", "2", "^@@scroll\\|.*", "build.envato.com"],
    ["autoplay", "business.tutsplus.com<br/>cgi.tutsplus.com<br/>code.tutsplus.com<br/>design.tutsplus.com<br/>photography.tutsplus.com<br/>webdesign.tutsplus.com<br/>computers.tutsplus.com<br/>music.tutsplus.com", "Pending", "Persistent", "HTML", "2", "", "business.tutsplus.com"],
    ["captions", "business.tutsplus.com<br/>cgi.tutsplus.com<br/>code.tutsplus.com<br/>design.tutsplus.com<br/>photography.tutsplus.com<br/>webdesign.tutsplus.com<br/>computers.tutsplus.com<br/>music.tutsplus.com", "Pending", "Persistent", "HTML", "2", "", "business.tutsplus.com"],
    ["playbackRate", "business.tutsplus.com<br/>cgi.tutsplus.com<br/>code.tutsplus.com<br/>design.tutsplus.com<br/>photography.tutsplus.com<br/>webdesign.tutsplus.com<br/>computers.tutsplus.com<br/>music.tutsplus.com", "Pending", "Persistent", "HTML", "2", "", "business.tutsplus.com"],
    ["wistia-video-progress-#", "cgi.tutsplus.com<br/>code.tutsplus.com<br/>computers.tutsplus.com<br/>design.tutsplus.com<br/>fast.wistia.net<br/>music.tutsplus.com<br/>photography.tutsplus.com<br/>webdesign.tutsplus.com", "Contains a timestamp for the website’s video-content. This allows the user to resume watching without having to start over, if the user leaves the video or website.  ", "Persistent", "HTML", "2", "^wistia-video-progress-[0-9a-z]{10}$", "static.tutsplus.com<br/>fast.wistia.net"],
    ["loglevel", "code.tutsplus.com<br/>fast.wistia.net<br/>photography.tutsplus.com<br/>cgi.tutsplus.com<br/>computers.tutsplus.com<br/>design.tutsplus.com<br/>music.tutsplus.com<br/>webdesign.tutsplus.com", "Maintains settings and outputs when using the Developer Tools Console on current session.", "Persistent", "HTML", "2", "", "static.tutsplus.com<br/>fast.wistia.net"],
    ["CookieConsentBulkSetting-#", "consentcdn.cookiebot.com", "Enables cookie consent across multiple websites", "Persistent", "HTML", "2", "", "consentcdn.cookiebot.com"],
    ["experiment_7cObSMEdTEqbFh9GeQwMeg", "envato.com", "Pending", "1 year", "HTML", "1", "", "envato.com"],
    ["experiment_b6_7bheCS1KzmWNKj8-m2g", "envato.com", "Pending", "1 year", "HTML", "1", "", "envato.com"],
    ["experiment_Q1FIrtgTbyZcmu7kfBpDw", "envato.com", "Frontdoor homepage experiment 2", "Persistent", "HTML", "2", "", "envato.com"],
    ["mid", "instagram.com", "This cookie is used to identify the visitor through an application. This allows the visitor to login to a website through their Instagram application for example.", "2 years", "HTTP", "1", "", "www.instagram.com"],
    ["lidc", "linkedin.com", "Registers which server-cluster is serving the visitor. This is used in context with load balancing, in order to optimize user experience.  ", "1 day", "HTTP", "1", "", "linkedin.com"]
];
CookieConsentDialog.cookieTableStatistics = [
    ["px.gif", "ad-delivery.net", "This cookie is used to determine if the visitor has any adblocker software in their browser – this information can be used to make website content inaccessible to visitors if the website is financed with third-party advertisement.", "Session", "Pixel", "5", "", "ad-delivery.net"],
    ["bounce", "adnxs.com", "Determines if a user leaves the website straight away. This information is used for internal statistics and analytics by the website operator.  ", "Session", "Pixel", "5", "", "ib.adnxs.com"],
    ["ab", "agkn.com", "This cookie is used by the website’s operator in context with multi-variate testing. This is a tool used to combine or change content on the website. This allows the website to find the best variation/edition of the site. ", "1 year", "HTTP", "1", "", "agkn.com"],
    ["events/1/#", "bam.nr-data.net", "Used to monitor website performance for statistical purposes.", "Session", "Pixel", "5", "", "bam.nr-data.net"],
    ["jserrors/1/#", "bam.nr-data.net", "Pending", "Session", "Pixel", "5", "", "bam.nr-data.net"],
    ["_hjIncludedInPageviewSample", "business.tutsplus.com<br/>cgi.tutsplus.com<br/>code.tutsplus.com<br/>computers.tutsplus.com<br/>crafts.tutsplus.com<br/>design.tutsplus.com<br/>email.tutsplus.com<br/>gamedevelopment.tutsplus.com<br/>music.tutsplus.com<br/>photography.tutsplus.com<br/>tutsplus.com<br/>webdesign.tutsplus.com", "Used to detect whether the user navigation and interactions are included in the website’s data analytics. ", "1 day", "HTTP", "1", "", "business.tutsplus.com<br/>script.hotjar.com"],
    ["_hjIncludedInSessionSample", "business.tutsplus.com<br/>cgi.tutsplus.com<br/>code.tutsplus.com<br/>computers.tutsplus.com<br/>crafts.tutsplus.com<br/>design.tutsplus.com<br/>email.tutsplus.com<br/>gamedevelopment.tutsplus.com<br/>music.tutsplus.com<br/>photography.tutsplus.com<br/>tutsplus.com<br/>webdesign.tutsplus.com", "Registers data on visitors' website-behaviour. This is used for internal analysis and website optimization. ", "1 day", "HTTP", "1", "", "business.tutsplus.com<br/>script.hotjar.com"],
    ["undefined", "cgi.tutsplus.com<br/>code.tutsplus.com<br/>computers.tutsplus.com<br/>design.tutsplus.com<br/>fast.wistia.net<br/>help.author.envato.com<br/>help.market.envato.com<br/>music.tutsplus.com<br/>photography.tutsplus.com<br/>webdesign.tutsplus.com", "Collects data on visitor interaction with the website's video-content - This data is used to make the website's video-content more relevant towards the visitor.  ", "Persistent", "HTML", "2", "", "static.tutsplus.com<br/>fast.wistia.net"],
    ["wistia", "cgi.tutsplus.com<br/>code.tutsplus.com<br/>computers.tutsplus.com<br/>design.tutsplus.com<br/>fast.wistia.net<br/>help.author.envato.com<br/>music.tutsplus.com<br/>photography.tutsplus.com<br/>webdesign.tutsplus.com", "Used by the website to track the visitor's use of video-content - The cookie roots from Wistia, which provides video-software to websites.", "Persistent", "HTML", "2", "", "static.tutsplus.com<br/>fast.wistia.net"],
    ["amp_#", "codesandbox.io", "Registers statistical data on users' behaviour on the website. Used for internal analytics by the website operator. ", "Persistent", "HTML", "2", "^amp_[\\da-f]{6}$", "codesandbox.io"],
    ["amplitude_unsent_#", "codesandbox.io", "Used in context with the website’s pop-up questionnaires and messengering. The data is used for statistical or marketing purposes.", "Persistent", "HTML", "2", "^amplitude_unsent(_[\\da-f]{32}){1,2}(_[a-z ]+)?$", "codesandbox.io"],
    ["amplitude_unsent_identify_#", "codesandbox.io", "Used in context with the website’s pop-up questionnaires and messengering. The data is used for statistical or marketing purposes.", "Persistent", "HTML", "2", "^amplitude_unsent_identify(_[\\da-f]{32}){1,2}(_[a-z ]+)?$", "codesandbox.io"],
    ["ga_#", "ctnsnet.com", "Pending", "1 year", "HTTP", "1", "^gid_[\\w-]{27}$", "gcm.ctnsnet.com"],
    ["https://#.#/", "d37vlkgj6jn9t1.cloudfront.net<br/>exactly-huge-arachnid.edgecompute.app<br/>serverless-benchmarks-js.compute-pipe.com<br/>serverless-benchmarks-rust.compute-pipe.com<br/>uniquely-peaceful-hagfish.edgecompute.app", "Registers statistical data on users' behaviour on the website. Used for internal analytics by the website operator. ", "Session", "Pixel", "5", "^https?:\\/\\/[\\w-]+(\\.[\\w-]+)+\\/$", "d37vlkgj6jn9t1.cloudfront.net<br/>exactly-huge-arachnid.edgecompute.app<br/>serverless-benchmarks-js.compute-pipe.com<br/>serverless-benchmarks-rust.compute-pipe.com<br/>uniquely-peaceful-hagfish.edgecompute.app"],
    ["_hjRecordingLastActivity", "design.tutsplus.com<br/>tutsplus.com", "Sets a unique ID for the session. This allows the website to obtain data on visitor behaviour for statistical purposes.", "Session", "HTML", "2", "", "script.hotjar.com"],
    ["hjViewportId", "design.tutsplus.com<br/>tutsplus.com", "Sets a unique ID for the session. This allows the website to obtain data on visitor behaviour for statistical purposes.", "Session", "HTML", "2", "", "script.hotjar.com"],
    ["apc_local_id", "email.tutsplus.com", "Used in context with the VR-content on website. Collects data on who, what and when the content has been viewed for statistical purposes. ", "Persistent", "HTML", "2", "", "fast.appcues.com"],
    ["apc_user", "email.tutsplus.com", "Used in context with the VR-content on website. Collects data on who, what and when the content has been viewed for statistical purposes. ", "Session", "HTML", "2", "", "fast.appcues.com"],
    ["_ce.gtld", "envato.com", "Holds which URL should be presented to the visitor when visiting the site. ", "Session", "HTTP", "1", "", "www.envato.com"],
    ["_ce.s", "envato.com", "Collects data on the user’s navigation and behavior on the website. This is used to compile statistical reports and heatmaps for the website owner.", "1 year", "HTTP", "1", "", "www.envato.com"],
    ["_ga", "envato.com<br/>tutsplus.com", "Registers a unique ID that is used to generate statistical data on how the visitor uses the website.", "2 years", "HTTP", "1", "", "www.google-analytics.com<br/>static.tutsplus.com"],
    ["_gat", "envato.com<br/>tutsplus.com", "Used by Google Analytics to throttle request rate", "1 day", "HTTP", "1", "^_gat(_.+)*$", "www.google-analytics.com<br/>static.tutsplus.com"],
    ["_gid", "envato.com<br/>tutsplus.com", "Registers a unique ID that is used to generate statistical data on how the visitor uses the website.", "1 day", "HTTP", "1", "", "www.google-analytics.com<br/>static.tutsplus.com"],
    ["ajs_anonymous_id", "envato.com<br/>tutsplus.com", "Segment cookie for 2019 CDP trial", "1 year", "HTTP", "1", "", "envato.com"],
    ["ajs_group_id", "envato.com<br/>tutsplus.com", "Segment cookie for 2019 CDP trial", "1 year", "HTTP", "1", "", "envato.com"],
    ["ce_clock", "envato.com", "Sets a timestamp for when the visitor entered the website. This is used for analytical purposes on the website. ", "Persistent", "HTML", "2", "", "www.envato.com"],
    ["cebs", "envato.com", "Tracks the individual sessions on the website, allowing the website to compile statistical data from multiple visits. This data can also be used to create leads for marketing purposes.", "Session", "HTTP", "1", "", "www.envato.com"],
    ["cebsp", "envato.com", "This cookie is used to determine when the visitor last visited the different subpages on the website.", "Session", "HTTP", "1", "", "www.envato.com"],
    ["cetabid", "envato.com", "Sets a unique ID for the session. This allows the website to obtain data on visitor behaviour for statistical purposes.", "Session", "HTML", "2", "", "www.envato.com"],
    ["ga:clientIdVerification", "envato.com", "Pending", "1 year", "HTML", "1", "", "envato.com"],
    ["pll_language", "envato.com", "This cookie is used to determine the preferred language of the visitor and sets the language accordingly on the website, if possible.", "1 year", "HTTP", "1", "", "www.envato.com"],
    ["popup-dismissed-1779478716", "envato.com", "Survey popup for envato.com homepage.", "Persistent", "HTML", "2", "", "envato.com"],
    ["formstack.analytics.viewed-form.#", "formstack.com", "Pending", "Persistent", "HTML", "2", "^formstack\\.analytics\\.viewed-form\\.\\d{6,7}$", "formstack.com"],
    ["collect", "google-analytics.com", "Used to send data to Google Analytics about the visitor's device and behavior. Tracks the visitor across devices and marketing channels.", "Session", "Pixel", "5", "^[r\\/]*collect$", "www.google-analytics.com"],
    ["hc:#:recently_visited_articles", "help.author.envato.com<br/>help.elements.envato.com<br/>help.market.envato.com<br/>studiosupport.envato.com", "Registers which articles the user has visited in a Zendesk knowledge base.", "Persistent", "HTML", "2", "^hc:[a-f0-9]{40}:recently_visited_articles$", "static.zdassets.com"],
    ["S", "mplxtms.com", "Sets a unique ID for the session. This allows the website to obtain data on visitor behaviour for statistical purposes.", "1 year", "HTTP", "1", "", "mplxtms.com"],
    ["PugT", "pubmatic.com", "Used to determine the number of times the cookies have been updated in the visitor's browser. Used to optimize the website's server efficiency.  ", "29 days", "HTTP", "1", "", "pubmatic.com"],
    ["d", "quantserve.com", "Collects anonymous data on the user's visits to the website, such as the number of visits, average time spent on the website and what pages have been loaded with the purpose of generating reports for optimising the website content.", "3 months", "HTTP", "1", "", "cms.quantserve.com"],
    ["_hjAbsoluteSessionInProgress", "tutsplus.com", "This cookie is used to count how many times a website has been visited by different visitors - this is done by assigning the visitor an ID, so the visitor does not get registered twice.", "1 day", "HTTP", "1", "", "script.hotjar.com"],
    ["_hjFirstSeen", "tutsplus.com", "This cookie is used to determine if the visitor has visited the website before, or if it is a new visitor on the website.", "1 day", "HTTP", "1", "", "script.hotjar.com"],
    ["_hjSession_#", "tutsplus.com", "Collects statistics on the visitor's visits to the website, such as the number of visits, average time spent on the website and what pages have been read.", "1 day", "HTTP", "1", "^_hjSession_\\d+$", "script.hotjar.com"],
    ["_hjSessionUser_#", "tutsplus.com", "Collects statistics on the visitor's visits to the website, such as the number of visits, average time spent on the website and what pages have been read.", "1 year", "HTTP", "1", "^_hjSessionUser_\\d+$", "script.hotjar.com"],
    ["_hjTLDTest", "tutsplus.com", "Registers statistical data on users' behaviour on the website. Used for internal analytics by the website operator. ", "Session", "HTTP", "1", "", "script.hotjar.com"],
    ["_parsely_session", "tutsplus.com", "This cookie is used to collect data on visitor behavior on the website.", "1 day", "HTTP", "1", "", "webdesign.tutsplus.com"],
    ["_parsely_visitor", "tutsplus.com", "This cookie is used to determine if the visitor has visited the website before, or if it is a new visitor on the website.", "13 months", "HTTP", "1", "", "webdesign.tutsplus.com"],
    ["ugid", "unsplash.com", "Necessary for the implementation of video-content on the website.", "1 year", "HTTP", "1", "", "unsplash.com"],
    ["yandexuid", "yandex.ru", "Registers data on visitors' website-behaviour. This is used for internal analysis and website optimization. ", "399 days", "HTTP", "1", "", "yandex.ru"]
];
CookieConsentDialog.cookieTableAdvertising = [
    ["_rxuuid", "1rx.io<br/>unrulymedia.com", "Sets a unique ID for the visitor, that allows third party advertisers to target the visitor with relevant advertisement. This pairing service is provided by third party advertisement hubs, which facilitates real-time bidding for advertisers.", "1 year", "HTTP", "1", "", "sync.1rx.io<br/>sync.targeting.unrulymedia.com"],
    ["tuuid", "360yield.com<br/>admedo.com<br/>bidswitch.net<br/>company-target.com<br/>creative-serving.com<br/>scoota.co", "Collects visitor data related to the user's visits to the website, such as the number of visits, average time spent on the website and what pages have been loaded, with the purpose of displaying targeted ads.", "3 months", "HTTP", "1", "", "360yield.com<br/>pool.admedo.com<br/>x.bidswitch.net<br/>company-target.com<br/>creative-serving.com<br/>scoota.co"],
    ["tuuid_lu", "360yield.com<br/>admedo.com<br/>bidswitch.net<br/>company-target.com<br/>creative-serving.com<br/>scoota.co", "Contains a unique visitor ID, which allows Bidswitch.com to track the visitor across multiple websites. This allows Bidswitch to optimize advertisement relevance and ensure that the visitor does not see the same ads multiple times.  ", "3 months", "HTTP", "1", "", "360yield.com<br/>pool.admedo.com<br/>x.bidswitch.net<br/>company-target.com<br/>creative-serving.com<br/>scoota.co"],
    ["um", "360yield.com", "Registers the visitor's behavior on social media - can be used to optimize ad-relevance and general targeting.", "3 months", "HTTP", "1", "", "360yield.com"],
    ["umeh", "360yield.com", "Used to track visitors on multiple websites, in order to present relevant advertisement based on the visitor's preferences. ", "3 months", "HTTP", "1", "", "360yield.com"],
    ["tluid", "3lift.com", "This cookie is used to identify the visitor and optimize ad-relevance by collecting visitor data from multiple websites – this exchange of visitor data is normally provided by a third-party data-center or ad-exchange.", "3 months", "HTTP", "1", "", "eb2.3lift.com"],
    ["auid", "acuityplatform.com", "Registers a unique user ID that recognises the user's browser when visiting websites that show ads from the same ad network. The cookie is used to collect statistical data of the visitor's movements and to generate targeted ads.", "1 year", "HTTP", "1", "", "acuityplatform.com"],
    ["aum", "acuityplatform.com", "Collects data on user behaviour and interaction in order to optimize the website and make advertisement on the website more relevant. ", "1 year", "HTTP", "1", "", "acuityplatform.com"],
    ["C", "adform.net", "Used to check if the user's browser supports cookies.", "29 days", "HTTP", "1", "", "c1.adform.net"],
    ["TPC", "adform.net", "Used to check if the user's browser supports cookies.", "6 days", "HTTP", "1", "", "adform.net"],
    ["uid", "adform.net<br/>adtdp.com<br/>criteo.com<br/>turn.com", "Registers a unique user ID that recognises the user's browser when visiting websites that use the same ad network. The purpose is to optimise display of ads based on the user's movements and various ad providers' bids for displaying user ads.", "2 months", "HTTP", "1", "", "c1.adform.net<br/>adtdp.com<br/>criteo.com<br/>ad.turn.com"],
    ["UserID1", "adition.com", "This cookie is used to collect information on a visitor. This information will become an ID string with information on a specific visitor – ID information strings can be used to target groups with similar preferences, or can be used by third-party domains or ad-exchanges.", "3 months", "HTTP", "1", "", "dsp.adfarm1.adition.com"],
    ["anj", "adnxs.com", "Registers a unique ID that identifies a returning user's device. The ID is used for targeted ads.", "3 months", "HTTP", "1", "", "ib.adnxs.com"],
    ["setuid", "adnxs.com", "This cookie is set by the audience manager of the website to determine the time and frequencies of visitor data synchronization - cookie data synchronization is used to synchronize and gather visitor data from several websites.", "Session", "Pixel", "5", "", "ib.adnxs.com"],
    ["uuid2", "adnxs.com", "Registers a unique ID that identifies a returning user's device. The ID is used for targeted ads.", "3 months", "HTTP", "1", "", "ib.adnxs.com"],
    ["__aasi", "adrta.com", "Sets a unique ID for the visitor, that allows third party advertisers to target the visitor with relevant advertisement. This pairing service is provided by third party advertisement hubs, which facilitates real-time bidding for advertisers.", "Session", "HTTP", "1", "", "adrta.com"],
    ["__aast", "adrta.com", "Sets a unique ID for the visitor, that allows third party advertisers to target the visitor with relevant advertisement. This pairing service is provided by third party advertisement hubs, which facilitates real-time bidding for advertisers.", "Session", "HTTP", "1", "", "adrta.com"],
    ["__aavi", "adrta.com", "Sets a unique ID for the visitor, that allows third party advertisers to target the visitor with relevant advertisement. This pairing service is provided by third party advertisement hubs, which facilitates real-time bidding for advertisers.", "399 days", "HTTP", "1", "", "adrta.com"],
    ["__aavt", "adrta.com", "Sets a unique ID for the visitor, that allows third party advertisers to target the visitor with relevant advertisement. This pairing service is provided by third party advertisement hubs, which facilitates real-time bidding for advertisers.", "399 days", "HTTP", "1", "", "adrta.com"],
    ["uuid", "ads.avct.cloud<br/>mathtag.com", "This cookie is used to optimize ad relevance by collecting visitor data from multiple websites – this exchange of visitor data is normally provided by a third-party data-center or ad-exchange.", "1 year", "HTTP", "1", "", "ads.avct.cloud<br/>sync.mathtag.com"],
    ["_tracker", "ads.travelaudience.com<br/>travelaudience.com", "Sets a unique ID for the visitor, that allows third party advertisers to target the visitor with relevant advertisement. This pairing service is provided by third party advertisement hubs, which facilitates real-time bidding for advertisers.", "1 year", "HTTP", "1", "", "ads.travelaudience.com"],
    ["TDCPM", "adsrvr.org", "Registers a unique ID that identifies a returning user's device. The ID is used for targeted ads.", "1 year", "HTTP", "1", "", "adsrvr.org"],
    ["TDID", "adsrvr.org", "Registers a unique ID that identifies a returning user's device. The ID is used for targeted ads.", "1 year", "HTTP", "1", "", "adsrvr.org"],
    ["track/cmf/google", "adsrvr.org", "Presents the user with relevant content and advertisement. The service is provided by third-party advertisement hubs, which facilitate real-time bidding for advertisers.", "Session", "Pixel", "5", "", "match.adsrvr.org"],
    ["u", "agkn.com", "Collects data on user visits to the website, such as what pages have been accessed. The registered data is used to categorise the user's interest and demographic profiles in terms of resales for targeted marketing.", "1 year", "HTTP", "1", "", "agkn.com"],
    ["dcm", "amazon-adsystem.com", "Presents the user with relevant content and advertisement. The service is provided by third-party advertisement hubs, which facilitate real-time bidding for advertisers.", "Session", "Pixel", "5", "", "s.amazon-adsystem.com"],
    ["s/dcm", "amazon-adsystem.com", "Used to identify the visitor across visits and devices. This allows the website to present the visitor with relevant advertisement - The service is provided by third party advertisement hubs, which facilitate real-time bidding for advertisers. ", "Session", "Pixel", "5", "", "aax-eu.amazon-adsystem.com"],
    ["IDSYNC", "analytics.yahoo.com", "Used to identify the visitor across visits and devices. This allows the website to present the visitor with relevant advertisement - The service is provided by third party advertisement hubs, which facilitate real-time bidding for advertisers. ", "1 year", "HTTP", "1", "", "ups.analytics.yahoo.com"],
    ["awpv#", "awin1.com<br/>zenaps.com", "Pending", "3 days", "HTTP", "1", "", "awin1.com"],
    ["AWSESS", "awin1.com<br/>zenaps.com", "Collects data on visitor behaviour from multiple websites, in order to present more relevant advertisement - This also allows the website to limit the number of times that they are shown the same advertisement. ", "Session", "HTTP", "1", "", "www.awin1.com"],
    ["cshow.php", "awin1.com", "Pending", "Session", "Pixel", "5", "", "www.awin1.com"],
    ["bito", "bidr.io", "Sets a unique ID for the visitor, that allows third party advertisers to target the visitor with relevant advertisement. This pairing service is provided by third party advertisement hubs, which facilitates real-time bidding for advertisers.", "1 year", "HTTP", "1", "", "bidr.io"],
    ["bitoIsSecure", "bidr.io", "Presents the user with relevant content and advertisement. The service is provided by third-party advertisement hubs, which facilitate real-time bidding for advertisers.", "1 year", "HTTP", "1", "", "bidr.io"],
    ["google_push", "bidswitch.net", "Collects statistical data related to the user's website visits, such as the number of visits, average time spent on the website and what pages have been loaded. The purpose is to segment the website's users according to factors such as demographics and geographical location, in order to enable media and marketing agencies to structure and understand their target groups to enable customised online advertising.", "1 day", "HTTP", "1", "", "x.bidswitch.net"],
    ["google_sync_status", "bidswitch.net", "Sets a unique ID for the visitor, that allows third party advertisers to target the visitor with relevant advertisement. This pairing service is provided by third party advertisement hubs, which facilitates real-time bidding for advertisers. ", "Session", "Pixel", "5", "", "x.bidswitch.net"],
    ["MUID", "bing.com", "Used widely by Microsoft as a unique user ID. The cookie enables user tracking by synchronising the ID across many Microsoft domains.", "1 year", "HTTP", "1", "", "bing.com"],
    ["webShopPV", "blau.de<br/>o2online.de", "Collects data on user behaviour and interaction in order to optimize the website and make advertisement on the website more relevant. ", "7 days", "HTTP", "1", "", "partner.blau.de<br/>partner.o2online.de"],
    ["b", "blismedia.com", "Collects statistical data related to the user's website visits, such as the number of visits, average time spent on the website and what pages have been loaded. The purpose is to segment the website's users according to factors such as demographics and geographical location, in order to enable media and marketing agencies to structure and understand their target groups to enable customised online advertising.", "1 year", "HTTP", "1", "", "blismedia.com"],
    ["bkdc", "bluekai.com", "Registers user data, such as IP address, geographical location, visited websites, and what ads the user has clicked, with the purpose of optimising ad display based on the user's movement on websites that use the same ad network.", "179 days", "HTTP", "1", "", "bluekai.com"],
    ["bkpa", "bluekai.com", "Presents the user with relevant content and advertisement. The service is provided by third-party advertisement hubs, which facilitate real-time bidding for advertisers.", "179 days", "HTTP", "1", "", "bluekai.com"],
    ["bku", "bluekai.com", "Registers anonymised user data, such as IP address, geographical location, visited websites, and what ads the user has clicked, with the purpose of optimising ad display based on the user's movement on websites that use the same ad network.", "179 days", "HTTP", "1", "", "bluekai.com"],
    ["_knxq_", "brand-display.com", "Determines when the visitor last visited the different subpages on the website, as well as sets a timestamp for when the session started.", "399 days", "HTTP", "1", "", "brand-display.com"],
    ["GoogleAdServingTest", "business.tutsplus.com<br/>cgi.tutsplus.com<br/>code.tutsplus.com<br/>computers.tutsplus.com<br/>crafts.tutsplus.com<br/>design.tutsplus.com<br/>gamedevelopment.tutsplus.com<br/>music.tutsplus.com<br/>photography.tutsplus.com<br/>webdesign.tutsplus.com", "Used to register what ads have been displayed to the user.", "Session", "HTTP", "1", "", "business.tutsplus.com<br/>securepubads.g.doubleclick.net"],
    ["_auid", "c.appier.net", "Identifies all devices the user uses with the purpose of displaying targeted ads on all devices.", "1 year", "HTTP", "1", "", "c.appier.net"],
    ["CMID", "casalemedia.com", "Collects visitor data related to the user's visits to the website, such as the number of visits, average time spent on the website and what pages have been loaded, with the purpose of displaying targeted ads.", "1 year", "HTTP", "1", "", "dsum-sec.casalemedia.com"],
    ["CMPRO", "casalemedia.com", "Collects data on visitor behaviour from multiple websites, in order to present more relevant advertisement - This also allows the website to limit the number of times that the visitor is shown the same advertisement.  ", "3 months", "HTTP", "1", "", "dsum-sec.casalemedia.com"],
    ["CMPS", "casalemedia.com", "Collects visitor data related to the user's visits to the website, such as the number of visits, average time spent on the website and what pages have been loaded, with the purpose of displaying targeted ads.", "3 months", "HTTP", "1", "", "dsum-sec.casalemedia.com"],
    ["CMTS", "casalemedia.com", "Collects visitor data related to the user's visits to the website, such as the number of visits, average time spent on the website and what pages have been loaded, with the purpose of displaying targeted ads.", "3 months", "HTTP", "1", "", "dsum-sec.casalemedia.com"],
    ["rum", "casalemedia.com", "Collects data related to the user's visits to the website, such as the number of visits, average time spent on the website and what pages have been loaded, with the purpose of displaying targeted ads.", "Session", "Pixel", "5", "", "dsum-sec.casalemedia.com"],
    ["cp_session", "codepen.io", "Registers user behaviour and navigation on the website, and any interaction with active campaigns. This is used for optimizing advertisement and for efficient retargeting.  ", "29 days", "HTTP", "1", "", "codepen.io"],
    ["CxtId", "connextra.com", "Collects data on visitor behaviour from multiple websites, in order to present more relevant advertisement - This also allows the website to limit the number of times that they are shown the same advertisement. ", "1 year", "HTTP", "1", "", "connextra.com"],
    ["pb_rtb_ev", "contextweb.com", "Registers anonymised user data, such as IP address, geographical location, visited websites, and what ads the user has clicked, with the purpose of optimising ad display based on the user's movement on websites that use the same ad network.", "1 year", "HTTP", "1", "", "contextweb.com"],
    ["V", "contextweb.com", "Registers anonymised user data, such as IP address, geographical location, visited websites, and what ads the user has clicked, with the purpose of optimising ad display based on the user's movement on websites that use the same ad network.", "1 year", "HTTP", "1", "", "contextweb.com"],
    ["delivery/lg.php", "criteo.com", "Pending", "Session", "Pixel", "5", "", "cat.fr.eu.criteo.com"],
    ["cid_#", "ctnsnet.com", "Collects unidentifiable data that is sent to an unidentifiable source. The source's identity is kept secret by the company, Whois Privacy Protection Service, Inc.", "1 year", "HTTP", "1", "^cid_\\w+", "gcm.ctnsnet.com"],
    ["cookies/google", "de17a.com", "Presents the user with relevant content and advertisement. The service is provided by third-party advertisement hubs, which facilitate real-time bidding for advertisers.", "Session", "Pixel", "5", "", "d5p.de17a.com"],
    ["guid", "de17a.com", "Used to generate statistical data on what pages the user has visited and how often an ad click leads either to a purchase or other actions on the advertiser's website.", "1 year", "HTTP", "1", "", "d5p.de17a.com"],
    ["cbsi", "demdex.net", "Pending", "179 days", "HTTP", "1", "", "cbsi.demdex.net"],
    ["demdex", "demdex.net", "Via a unique ID that is used for semantic content analysis, the user's navigation on the website is registered and linked to offline data from surveys and similar registrations to display targeted ads.", "179 days", "HTTP", "1", "", "demdex.net"],
    ["dpm", "demdex.net", "Sets a unique ID for the visitor, that allows third party advertisers to target the visitor with relevant advertisement. This pairing service is provided by third party advertisement hubs, which facilitates real-time bidding for advertisers.", "179 days", "HTTP", "1", "", "dpm.demdex.net"],
    ["_hjRecordingEnabled", "design.tutsplus.com<br/>tutsplus.com", "This cookie is used to identify the visitor and optimize ad-relevance by collecting visitor data from multiple websites – this exchange of visitor data is normally provided by a third-party data-center or ad-exchange.", "Session", "HTML", "2", "", "script.hotjar.com"],
    ["punchv-e-f", "docs.google.com", "Used to implement the content through Google Docs. ", "Persistent", "HTML", "2", "", "docs.google.com"],
    ["punchv-e-n", "docs.google.com", "Used to implement the content through Google Docs. ", "Persistent", "HTML", "2", "", "docs.google.com"],
    ["punchv-e-v", "docs.google.com", "Used to implement the content through Google Docs. ", "Persistent", "HTML", "2", "", "docs.google.com"],
    ["cjae", "dotomi.com", "Pending", "1 year", "HTTP", "1", "", "dotomi.com"],
    ["DotomiUser", "dotomi.com", "Via a unique ID that is used for semantic content analysis, the user's navigation on the website is registered and linked to offline data from surveys and similar registrations to display targeted ads.", "1 year", "HTTP", "1", "", "dotomi.com"],
    ["dbm/ad", "doubleclick.net", "Presents the user with relevant content and advertisement. The service is provided by third-party advertisement hubs, which facilitate real-time bidding for advertisers.", "Session", "Pixel", "5", "", "googleads.g.doubleclick.net"],
    ["DSID", "doubleclick.net", "Used by Google DoubleClick for re-targeting, optimisation, reporting and attribution of online adverts.", "1 day", "HTTP", "1", "", "googleads.g.doubleclick.net"],
    ["IDE", "doubleclick.net", "Used by Google DoubleClick to register and report the website user's actions after viewing or clicking one of the advertiser's ads with the purpose of measuring the efficacy of an ad and to present targeted ads to the user.", "1 year", "HTTP", "1", "", "securepubads.g.doubleclick.net"],
    ["pagead/interaction", "doubleclick.net", "Used by DoubleClick to determine whether website advertisement has been properly displayed - This is done to make their marketing efforts more efficient.  ", "Session", "Pixel", "5", "", "googleads.g.doubleclick.net"],
    ["test_cookie", "doubleclick.net", "Used to check if the user's browser supports cookies.", "1 day", "HTTP", "1", "", "doubleclick.net"],
    ["__tt_embed__mounting", "envato.com", "Registers data on the performance of the website’s embedded video-content. ", "Session", "HTML", "2", "", "www.tiktok.com"],
    ["__tt_embed__storage_test", "envato.com", "Registers data on the performance of the website’s embedded video-content. ", "Session", "HTML", "2", "", "www.tiktok.com"],
    ["_fbp", "envato.com", "Used by Facebook to deliver a series of advertisement products such as real time bidding from third party advertisers.", "3 months", "HTTP", "1", "", "www.envato.com"],
    ["_gaexp", "envato.com<br/>tutsplus.com", "This cookie is used by Google Analytics to determine if the visitor is involved in their marketing experiments.", "1 year", "HTTP", "1", "", "envato.com<br/>www.googleoptimize.com"],
    ["_gcl_au", "envato.com", "Used by Google AdSense for experimenting with advertisement efficiency across websites using their services.   ", "3 months", "HTTP", "1", "", "www.envato.com"],
    ["_pin_unauth", "envato.com", "Used by Pinterest to track the usage of services.", "1 year", "HTTP", "1", "", "www.envato.com"],
    ["_uetsid", "envato.com", "Collects data on visitor behaviour from multiple websites, in order to present more relevant advertisement - This also allows the website to limit the number of times that they are shown the same advertisement. ", "1 day", "HTML", "1", "", "www.envato.com"],
    ["_uetsid_exp", "envato.com", "Contains the expiry-date for the cookie with corresponding name. ", "Persistent", "HTML", "2", "", "www.envato.com"],
    ["_uetvid", "envato.com", "Used to track visitors on multiple websites, in order to present relevant advertisement based on the visitor's preferences. ", "1 year", "HTML", "1", "", "www.envato.com"],
    ["_uetvid_exp", "envato.com", "Contains the expiry-date for the cookie with corresponding name. ", "Persistent", "HTML", "2", "", "www.envato.com"],
    ["elementor", "envato.com", "Used in context with the website's WordPress theme. The cookie allows the website owner to implement or change the website's content in real-time.", "Persistent", "HTML", "2", "", "www.envato.com"],
    ["everest_g_v2", "everesttech.net", "Used for targeted ads and to document efficacy of each individual ad.", "1 year", "HTTP", "1", "", "sync-tm.everesttech.net"],
    ["EE", "exelator.com", "Collects data related to the user's visits to the website, such as the number of visits, average time spent on the website and what pages have been loaded, with the purpose of displaying targeted ads.", "119 days", "HTTP", "1", "", "exelator.com"],
    ["ud", "exelator.com", "Collects visitor data related to the user's visits to the website, such as the number of visits, average time spent on the website and what pages have been loaded, with the purpose of displaying targeted ads.", "119 days", "HTTP", "1", "", "exelator.com"],
    ["ads/ga-audiences", "google.com", "Used by Google AdWords to re-engage visitors that are likely to convert to customers based on the visitor's online behaviour across websites.", "Session", "Pixel", "5", "", "www.google.ie"],
    ["NID", "google.com", "Registers a unique ID that identifies a returning user's device. The ID is used for targeted ads.", "6 months", "HTTP", "1", "", "google.com"],
    ["pagead/1p-user-list/#", "google.com", "Tracks if the user has shown interest in specific products or events across multiple websites and detects how the user navigates between sites. This is used for measurement of advertisement efforts and facilitates payment of referral-fees between websites.", "Session", "Pixel", "5", "", "www.google.com"],
    ["google_auto_fc_cmp_setting", "googlesyndication.com", "Stores the user's cookie consent state for the current domain", "Persistent", "HTML", "2", "", "pagead2.googlesyndication.com"],
    ["google_experiment_mod#", "googlesyndication.com", "Used by Google AdSense for experimenting with advertisement efficiency across websites using their services.  ", "Persistent", "HTML", "2", "^google_experiment_mod\\d+$", "pagead2.googlesyndication.com"],
    ["pagead/gen_204", "googlesyndication.com", "Collects data on visitor behaviour from multiple websites, in order to present more relevant advertisement - This also allows the website to limit the number of times that they are shown the same advertisement. ", "Session", "Pixel", "5", "", "pagead2.googlesyndication.com"],
    ["pcs/activeview", "googlesyndication.com", "Used by DoubleClick to determine whether website advertisement has been properly displayed - This is done to make their marketing efforts more efficient.  ", "Session", "Pixel", "5", "", "pagead2.googlesyndication.com"],
    ["pigeon_state", "instagram.com", "Facilitates the sharing function on the website. The cookie also allows websites to track and target the user with advertisement based on the user's likes and shares. ", "Persistent", "HTML", "2", "", "www.instagram.com"],
    ["www-claim-v2", "instagram.com", "Used for sharing content onto the social platform Instagram - This functionality is used for gathering information on visitor preferences for marketing purposes. ", "Session", "HTML", "2", "", "www.instagram.com"],
    ["_kuid_", "krxd.net", "Registers a unique ID that identifies a returning user's device. The ID is used for targeted ads.", "180 days", "HTTP", "1", "", "beacon.krxd.net"],
    ["ljt_reader", "lijit.com", "Collects data related to reader interests, context, demographics and other information on behalf of the Lijit platform with the purpose of finding interested users on websites with related content.", "1 year", "HTTP", "1", "", "ap.lijit.com"],
    ["bcookie", "linkedin.com", "Used by the social networking service, LinkedIn, for tracking the use of embedded services.", "1 year", "HTTP", "1", "", "linkedin.com"],
    ["bscookie", "linkedin.com", "Used by the social networking service, LinkedIn, for tracking the use of embedded services.", "1 year", "HTTP", "1", "", "linkedin.com"],
    ["mt_misc", "mathtag.com", "Collects data on the user's visits to the website, such as what pages have been loaded. The registered data is used for targeted ads.", "29 days", "HTTP", "1", "", "mathtag.com"],
    ["mt_mop", "mathtag.com", "Collects data on the user's visits to the website, such as what pages have been loaded. The registered data is used for targeted ads.", "29 days", "HTTP", "1", "", "sync.mathtag.com"],
    ["MONITOR_WEB_ID", "mon-va.byteoversea.com", "Used by the social networking service, TikTok, for tracking the use of embedded services.", "3 months", "HTTP", "1", "", "mon-va.byteoversea.com"],
    ["id", "mookie1.com", "Registers a unique ID that identifies a returning user's device. The ID is used for targeted ads.", "1 year", "HTTP", "1", "", "mookie1.com"],
    ["mdata", "mookie1.com", "Registers a unique ID that identifies a returning user's device. The ID is used for targeted ads.", "1 year", "HTTP", "1", "", "mookie1.com"],
    ["ov", "mookie1.com", "Presents the user with relevant content and advertisement. The service is provided by third-party advertisement hubs, which facilitate real-time bidding for advertisers.", "1 year", "HTTP", "1", "", "mookie1.com"],
    ["syncdata_#", "mookie1.com", "Pending", "9 days", "HTTP", "1", "^syncdata_[A-Z]*$", "mookie1.com"],
    ["t/v2/sync", "mookie1.com", "Used for data-synchronization with advertisement networks.", "Session", "Pixel", "5", "", "odr.mookie1.com"],
    ["i", "openx.net", "Registers anonymised user data, such as IP address, geographical location, visited websites, and what ads the user has clicked, with the purpose of optimising ad display based on the user's movement on websites that use the same ad network.", "1 year", "HTTP", "1", "", "openx.net"],
    ["sync/dds", "openx.net", "This cookie is set by the audience manager of the website to determine the time and frequencies of visitor data synchronization - cookie data synchronization is used to synchronize and gather visitor data from several websites.", "Session", "Pixel", "5", "", "rtb.openx.net"],
    ["w/1.0/cm", "openx.net", "Presents the user with relevant content and advertisement. The service is provided by third-party advertisement hubs, which facilitate real-time bidding for advertisers.", "Session", "Pixel", "5", "", "us-u.openx.net"],
    ["w/1.0/sd", "openx.net", "Registers data on visitors such as IP addresses, geographical location and advertisement interaction. This information is used optimize the advertisement on websites that make use of OpenX.net services.  ", "Session", "Pixel", "5", "", "us-u.openx.net"],
    ["DTU", "pb.media01.eu", "Used to track visitors on multiple websites, in order to present relevant advertisement based on the visitor's preferences. ", "400 days", "HTTP", "1", "", "pb.media01.eu"],
    ["_pinterest_ct_ua", "pinterest.com", "Used by Pinterest to track the usage of services.", "1 year", "HTTP", "1", "", "ct.pinterest.com"],
    ["KADUSERCOOKIE", "pubmatic.com", "Registers a unique ID that identifies the user's device during return visits across websites that use the same ad network. The ID is used to allow targeted ads.", "3 months", "HTTP", "1", "", "pubmatic.com"],
    ["KCCH", "pubmatic.com", "Registers if the PubMatic partner-cookie has been set in the user's browser.", "1 day", "HTTP", "1", "", "ads.pubmatic.com"],
    ["KRTBCOOKIE_#", "pubmatic.com", "Registers a unique ID that identifies the user's device during return visits across websites that use the same ad network. The ID is used to allow targeted ads.", "3 months", "HTTP", "1", "^KRTBCOOKIE_\\d+", "pubmatic.com"],
    ["KTPCACOOKIE", "pubmatic.com", "Registers a unique ID that identifies the user's device during return visits across websites that use the same ad network. The ID is used to allow targeted ads.", "1 day", "HTTP", "1", "", "pubmatic.com"],
    ["dpixel", "quantserve.com", "Collects data on user behaviour and interaction in order to optimize the website and make advertisement on the website more relevant. ", "Session", "Pixel", "5", "", "cms.quantserve.com"],
    ["mc", "quantserve.com", "Collects data on the user's visits to the website, such as what pages have been loaded. The registered data is used for targeted ads.", "13 months", "HTTP", "1", "", "cms.quantserve.com"],
    ["eud", "rfihub.com", "Registers user data, such as IP address, geographical location, visited websites, and what ads the user has clicked, with the purpose of optimising ad display based on the user's movement on websites that use the same ad network.", "1 year", "HTTP", "1", "", "rfihub.com"],
    ["rud", "rfihub.com", "Registers user data, such as IP address, geographical location, visited websites, and what ads the user has clicked, with the purpose of optimising ad display based on the user's movement on websites that use the same ad network.", "1 year", "HTTP", "1", "", "rfihub.com"],
    ["ruds", "rfihub.com", "Registers user data, such as IP address, geographical location, visited websites, and what ads the user has clicked, with the purpose of optimising ad display based on the user's movement on websites that use the same ad network.", "Session", "HTTP", "1", "", "rfihub.com"],
    ["pxrc", "rlcdn.com", "This cookie registers data on the visitor. The information is used to optimize advertisement relevance. ", "2 months", "HTTP", "1", "", "rlcdn.com"],
    ["rlas3", "rlcdn.com", "Collects visitor data related to the user's visits to the website, such as the number of visits, average time spent on the website and what pages have been loaded, with the purpose of displaying targeted ads.", "1 year", "HTTP", "1", "", "rlcdn.com"],
    ["cd", "rubiconproject.com", "Registers anonymised user data, such as IP address, geographical location, visited websites, and what ads the user has clicked, with the purpose of optimising ad display based on the user's movement on websites that use the same ad network.", "Session", "HTTP", "1", "", "eus.rubiconproject.com"],
    ["khaos", "rubiconproject.com", "Registers user data, such as IP address, geographical location, visited websites, and what ads the user has clicked, with the purpose of optimising ad display based on the user's movement on websites that use the same ad network.", "1 year", "HTTP", "1", "", "rubiconproject.com"],
    ["tap.php", "rubiconproject.com", "Registers data on visitor such as IP addresses, geographical location and advertisement interaction. This information is used optimize the advertisement on websites that make use of Rubicon Project-services. ", "Session", "Pixel", "5", "", "pixel.rubiconproject.com"],
    ["A6", "serving-sys.com", "Registers data on visitors from multiple visits and on multiple websites. This information is used to measure the efficiency of advertisement on websites.   ", "3 months", "HTTP", "1", "", "bs.serving-sys.com"],
    ["eyeblaster", "serving-sys.com", "Registers data on visitors from multiple visits and on multiple websites. This information is used to measure the efficiency of advertisement on websites.  ", "3 months", "HTTP", "1", "", "bs.serving-sys.com"],
    ["u2", "serving-sys.com", "Collects data related to the user's navigation visits to webpages in order to assess the efficacy of ads that are displayed on the website.", "3 months", "HTTP", "1", "", "bs.serving-sys.com"],
    ["suid", "simpli.fi", "Collects information on user preferences and/or interaction with web-campaign content - This is used on CRM-campaign-platform used by website owners for promoting events or products.", "1 year", "HTTP", "1", "", "simpli.fi"],
    ["suid_legacy", "simpli.fi", "Collects information on user preferences and/or interaction with web-campaign content - This is used on CRM-campaign-platform used by website owners for promoting events or products.", "1 year", "HTTP", "1", "", "um.simpli.fi"],
    ["_ssuma", "sitescout.com", "Presents the user with relevant content and advertisement. The service is provided by third-party advertisement hubs, which facilitate real-time bidding for advertisers.", "29 days", "HTTP", "1", "", "pixel-sync.sitescout.com"],
    ["ssi", "sitescout.com", "Registers a unique ID that identifies a returning user's device. The ID is used for targeted ads.", "1 year", "HTTP", "1", "", "pixel-sync.sitescout.com"],
    ["csync", "smartadserver.com", "Optimises ad display based on the user's movement combined and various advertiser bids for displaying user ads.", "1 year", "HTTP", "1", "", "smartadserver.com"],
    ["pid", "smartadserver.com", "Registers a unique ID that identifies a returning user's device. The ID is used for targeted ads.", "13 months", "HTTP", "1", "", "ssbsync.smartadserver.com"],
    ["redir", "smartadserver.com", "Presents the user with relevant content and advertisement. The service is provided by third-party advertisement hubs, which facilitate real-time bidding for advertisers.", "Session", "Pixel", "5", "", "rtb-csync.smartadserver.com"],
    ["TestIfCookieP", "smartadserver.com", "Identifies new users and generates a unique ID for each user.", "13 months", "HTTP", "1", "", "smartadserver.com"],
    ["WIDGET::local::assignments", "soundcloud.com", "Used by audio-platform SoundCloud to implement, measure and improve their embedded content/service on the website - The collection of data also includes visitors’ interaction with embedded content/service. This can be used for statistics or marketing purposes.  ", "Persistent", "HTML", "2", "", "w.soundcloud.com"],
    ["zuuid", "sportradarserving.com", "Used to track visitors on multiple websites, in order to present relevant advertisement based on the visitor's preferences. ", "1 year", "HTTP", "1", "", "sportradarserving.com"],
    ["zuuid_k", "sportradarserving.com", "Sets a unique ID for the visitor, that allows third party advertisers to target the visitor with relevant advertisement. This pairing service is provided by third party advertisement hubs, which facilitates real-time bidding for advertisers.", "1 year", "HTTP", "1", "", "sportradarserving.com"],
    ["zuuid_k_lu", "sportradarserving.com", "Sets a unique ID for the visitor, that allows third party advertisers to target the visitor with relevant advertisement. This pairing service is provided by third party advertisement hubs, which facilitates real-time bidding for advertisers.", "1 year", "HTTP", "1", "", "sportradarserving.com"],
    ["zuuid_lu", "sportradarserving.com", "Sets a unique ID for the visitor, that allows third party advertisers to target the visitor with relevant advertisement. This pairing service is provided by third party advertisement hubs, which facilitates real-time bidding for advertisers.", "1 year", "HTTP", "1", "", "sportradarserving.com"],
    ["audience", "spotxchange.com", "Used to determine whether the video-ads have been displayed correctly on the website - This is done to make video-ads more effective and ensure that the visitor is not shown the same ads more times than intended. The cookie also detects whether the visitor has any Do Not Track preferences.", "27 days", "HTTP", "1", "", "spotxchange.com"],
    ["partner", "spotxchange.com", "Used in context with video-advertisement. The cookie limits the number of times a user is shown the same advertisement. The cookie is also used to ensure relevance of the video-advertisement to the specific user.  ", "Session", "Pixel", "5", "", "sync.search.spotxchange.com"],
    ["sa-user-id", "stackadapt.com", "Used to track visitors on multiple websites, in order to present relevant advertisement based on the visitor's preferences. ", "1 year", "HTTP", "1", "", "sync.srv.stackadapt.com"],
    ["sa-user-id-v2", "stackadapt.com", "Used to track visitors on multiple websites, in order to present relevant advertisement based on the visitor's preferences. ", "1 year", "HTTP", "1", "", "srv.stackadapt.com"],
    ["UID", "stickyadstv.com", "Unique user ID that recognizes the user on returning visits", "29 days", "HTTP", "1", "", "ads.stickyadstv.com"],
    ["uid-bp-#", "stickyadstv.com", "Pending", "29 days", "HTTP", "1", "^uid-bp-\\d+$", "ads.stickyadstv.com"],
    ["muc_ads", "t.co", "Collects data on user behaviour and interaction in order to optimize the website and make advertisement on the website more relevant. ", "399 days", "HTTP", "1", "", "t.co"],
    ["TapAd_3WAY_SYNCS", "tapad.com", "Used for data-synchronization with advertisement networks.", "2 months", "HTTP", "1", "", "tapad.com"],
    ["TapAd_DID", "tapad.com", "Used to determine what type of devices (smartphones, tablets, computers, TVs etc.) is used by a user.", "2 months", "HTTP", "1", "", "tapad.com"],
    ["TapAd_TS", "tapad.com", "Used to determine what type of devices (smartphones, tablets, computers, TVs etc.) is used by a user.", "2 months", "HTTP", "1", "", "tapad.com"],
    ["sync-his", "tidaltv.com", "Sets a unique ID for the visitor, that allows third party advertisers to target the visitor with relevant advertisement. This pairing service is provided by third party advertisement hubs, which facilitates real-time bidding for advertisers.", "1 year", "HTTP", "1", "", "tidaltv.com"],
    ["tidal_ttid", "tidaltv.com", "Registers the ads provided by Videology that the user has seen and/or clicked. Used to generate a demographic profile of the user.", "1 year", "HTTP", "1", "", "tidaltv.com"],
    ["__tea_cache_tokens_#", "tiktok.com", "Pending", "Persistent", "HTML", "2", "^__tea_cache_tokens_\\d{4,}$", "www.tiktok.com"],
    ["__tea_sdk_ab_version_#", "tiktok.com", "Collects data on visitors' preferences and behaviour on the website - This information is used make content and advertisement more relevant to the specific visitor. ", "Persistent", "HTML", "2", "^__tea_sdk_ab_version_\\d+$", "www.tiktok.com"],
    ["__tea_session_id_#", "tiktok.com", "Used by the social networking service, TikTok, for tracking the use of embedded services.", "Session", "HTML", "2", "^__tea_session_id_\\d{4}$", "www.tiktok.com"],
    ["SLARDARtiktok_web_embed", "tiktok.com", "Collects data on visitors' preferences and behaviour on the website - This information is used make content and advertisement more relevant to the specific visitor. ", "Persistent", "HTML", "2", "", "www.tiktok.com"],
    ["ttwid", "tiktok.com", "Used by the social networking service, TikTok, for tracking the use of embedded services.", "1 year", "HTTP", "1", "", "www.tiktok.com"],
    ["ANON_ID", "tribalfusion.com", "Collects data on user visits to the website, such as what pages have been accessed. The registered data is used to categorise the user's interest and demographic profiles in terms of resales for targeted marketing.", "3 months", "HTTP", "1", "", "a.tribalfusion.com"],
    ["ANON_ID_old", "tribalfusion.com", "Collects data about the user's visit to the site, such as the number of returning visits and which pages are read. The purpose is to deliver targeted ads.", "3 months", "HTTP", "1", "", "a.tribalfusion.com"],
    ["i.match", "tribalfusion.com", "Presents the user with relevant content and advertisement. The service is provided by third-party advertisement hubs, which facilitate real-time bidding for advertisers.", "Session", "Pixel", "5", "", "a.tribalfusion.com"],
    ["z/i.match", "tribalfusion.com", "Presents the user with relevant content and advertisement. The service is provided by third-party advertisement hubs, which facilitate real-time bidding for advertisers.", "Session", "Pixel", "5", "", "s.tribalfusion.com"],
    ["fc", "turn.com", "Collects visitor data related to the user's visits to the website, such as the number of visits, average time spent on the website and what pages have been loaded, with the purpose of displaying targeted ads.", "179 days", "HTTP", "1", "", "turn.com"],
    ["pxs", "turn.com", "Presents the user with relevant content and advertisement. The service is provided by third-party advertisement hubs, which facilitate real-time bidding for advertisers.", "179 days", "HTTP", "1", "", "turn.com"],
    ["r/cms/id/0/ddc/1/pid/18/uid", "turn.com", "Used to identify the visitor across visits and devices. This allows the website to present the visitor with relevant advertisement - The service is provided by third party advertisement hubs, which facilitate real-time bidding for advertisers. ", "Session", "Pixel", "5", "", "r.turn.com"],
    ["r/imptrack", "turn.com", "Pending", "Session", "Pixel", "5", "", "presentation-ams1.turn.com"],
    ["__gads", "tutsplus.com", "Used to register what ads have been displayed to the user.", "1 year", "HTTP", "1", "", "securepubads.g.doubleclick.net"],
    ["__gpi", "tutsplus.com", "Collects information on user behaviour on multiple websites. This information is used in order to optimize the relevance of advertisement on the website.", "1 year", "HTTP", "1", "", "securepubads.g.doubleclick.net"],
    ["__tld__", "tutsplus.com", "Used to track visitors on multiple websites, in order to present relevant advertisement based on the visitor's preferences. ", "Session", "HTTP", "1", "", "cdn.segment.com"],
    ["personalization_id", "twitter.com", "This cookie is set by Twitter - The cookie allows the visitor to share content from the website onto their Twitter profile. ", "399 days", "HTTP", "1", "", "twitter.com"],
    ["RichHistory", "twitter.com", "Collects data on visitors' preferences and behaviour on the website - This information is used make content and advertisement more relevant to the specific visitor. ", "Session", "HTML", "2", "", "platform.twitter.com"],
    ["vuid", "vimeo.com", "Collects data on the user's visits to the website, such as which pages have been read.", "2 years", "HTTP", "1", "", "vimeo.com"],
    ["matchcasale", "w55c.net", "Collects data on the user's visits to the website, such as what pages have been loaded. The registered data is used for targeted ads.", "29 days", "HTTP", "1", "", "w55c.net"],
    ["matchgoogle", "w55c.net", "Regulates synchronisation of user identification and exchange of user data between various ad services.", "29 days", "HTTP", "1", "", "pm.w55c.net"],
    ["matchrubicon", "w55c.net", "Used to synchronise data for targeted ads with third party systems.", "29 days", "HTTP", "1", "", "w55c.net"],
    ["wfivefivec", "w55c.net", "Collects data on the user's visits to the website, such as what pages have been loaded. The registered data is used for targeted ads.", "13 months", "HTTP", "1", "", "pm.w55c.net"],
    ["_auth_key", "wistia.com", "Pending", "Session", "HTTP", "1", "", "auth.wistia.com"],
    ["_w_session", "wistia.com", "Pending", "13 days", "HTTP", "1", "", "tuts.wistia.com"],
    ["A3", "yahoo.com", "Collects information on user behaviour on multiple websites. This information is used in order to optimize the relevance of advertisement on the website.", "1 year", "HTTP", "1", "", "ups.analytics.yahoo.com"],
    ["sync/rubicon/#", "yahoo.com", "Pending", "Session", "Pixel", "5", "^sync\\/rubicon\\/.+", "pr-bh.ybp.yahoo.com"],
    ["yuidss", "yandex.ru", "Collects information on user behaviour on multiple websites. This information is used in order to optimize the relevance of advertisement on the website.", "399 days", "HTTP", "1", "", "yandex.ru"],
    ["VISITOR_INFO1_LIVE", "youtube.com", "Tries to estimate the users' bandwidth on pages with integrated YouTube videos.", "179 days", "HTTP", "1", "", "youtube.com"],
    ["YSC", "youtube.com", "Registers a unique ID to keep statistics of what videos from YouTube the user has seen.", "Session", "HTTP", "1", "", "youtube.com"],
    ["yt.innertube::nextId", "youtube.com<br/>youtube-nocookie.com", "Registers a unique ID to keep statistics of what videos from YouTube the user has seen.", "Persistent", "HTML", "2", "", "youtube.com"],
    ["yt.innertube::requests", "youtube.com<br/>youtube-nocookie.com", "Registers a unique ID to keep statistics of what videos from YouTube the user has seen.", "Persistent", "HTML", "2", "", "youtube.com"],
    ["ytidb::LAST_RESULT_ENTRY_KEY", "youtube.com<br/>youtube-nocookie.com", "Stores the user's video player preferences using embedded YouTube video", "Persistent", "HTML", "2", "", "youtube.com"],
    ["yt-remote-cast-available", "youtube.com<br/>youtube-nocookie.com", "Stores the user's video player preferences using embedded YouTube video", "Session", "HTML", "2", "", "www.youtube.com"],
    ["yt-remote-cast-installed", "youtube.com<br/>youtube-nocookie.com", "Stores the user's video player preferences using embedded YouTube video", "Session", "HTML", "2", "", "www.youtube.com"],
    ["yt-remote-connected-devices", "youtube.com<br/>youtube-nocookie.com", "Stores the user's video player preferences using embedded YouTube video", "Persistent", "HTML", "2", "", "www.youtube.com"],
    ["yt-remote-device-id", "youtube.com<br/>youtube-nocookie.com", "Stores the user's video player preferences using embedded YouTube video", "Persistent", "HTML", "2", "", "www.youtube.com"],
    ["yt-remote-fast-check-period", "youtube.com<br/>youtube-nocookie.com", "Stores the user's video player preferences using embedded YouTube video", "Session", "HTML", "2", "", "www.youtube.com"],
    ["yt-remote-session-app", "youtube.com<br/>youtube-nocookie.com", "Stores the user's video player preferences using embedded YouTube video", "Session", "HTML", "2", "", "www.youtube.com"],
    ["yt-remote-session-name", "youtube.com<br/>youtube-nocookie.com", "Stores the user's video player preferences using embedded YouTube video", "Session", "HTML", "2", "", "www.youtube.com"]
];
CookieConsentDialog.cookieTableUnclassified = [
    ["nscQ486", "blau.de", "Pending", "7 days", "HTTP", "1", "", "partner.blau.de"],
    ["nscT486", "blau.de", "Pending", "7 days", "HTTP", "1", "", "partner.blau.de"],
    ["BT_AA_DETECTION", "business.tutsplus.com<br/>cgi.tutsplus.com<br/>code.tutsplus.com<br/>computers.tutsplus.com<br/>crafts.tutsplus.com<br/>design.tutsplus.com<br/>gamedevelopment.tutsplus.com<br/>music.tutsplus.com<br/>photography.tutsplus.com<br/>tutsplus.com<br/>webdesign.tutsplus.com", "Pending", "Persistent", "HTML", "2", "", "business.tutsplus.com<br/>cdn.fuseplatform.net"],
    ["btUserCountry", "business.tutsplus.com<br/>cgi.tutsplus.com<br/>code.tutsplus.com<br/>computers.tutsplus.com<br/>crafts.tutsplus.com<br/>design.tutsplus.com<br/>gamedevelopment.tutsplus.com<br/>music.tutsplus.com<br/>photography.tutsplus.com<br/>tutsplus.com<br/>webdesign.tutsplus.com", "Pending", "Persistent", "HTML", "2", "", "business.tutsplus.com<br/>cdn.fuseplatform.net"],
    ["ts", "cgi.tutsplus.com", "Pending", "Session", "HTML", "2", "", "cgi.tutsplus.com"],
    ["cap", "choices.trustarc.com", "Pending", "Session", "Pixel", "5", "", "choices.trustarc.com"],
    ["embedProperties_User:VoDkNZ", "codepen.io", "Pending", "Persistent", "HTML", "2", "", "codepen.io"],
    ["__test__", "codesandbox.io", "Pending", "Persistent", "HTML", "2", "", "codesandbox.io"],
    ["csb-ab-user-id", "codesandbox.io", "Pending", "Persistent", "HTML", "2", "", "codesandbox.io"],
    ["staticentry", "congstar.de", "Pending", "7 days", "HTTP", "1", "", "congstar.de"],
    ["Hollywoodbets", "connextra.com", "Pending", "1 year", "HTTP", "1", "", "connextra.com"],
    ["LiveScoreBet", "connextra.com", "Pending", "1 year", "HTTP", "1", "", "connextra.com"],
    ["CEAffHA", "conrad.de", "Pending", "5 days", "HTTP", "1", "", "www.conrad.de"],
    ["HTLP_timestamp", "conrad.de", "Pending", "5 days", "HTTP", "1", "", "www.conrad.de"],
    ["267125engine/gs.analytics.nth", "e.gsrca.de", "Pending", "Persistent", "HTML", "2", "", "e.gsrca.de"],
    ["267125engine/gs.analytics.pa", "e.gsrca.de", "Pending", "Persistent", "HTML", "2", "", "e.gsrca.de"],
    ["267125engine/gs.analytics.seq", "e.gsrca.de", "Pending", "Persistent", "HTML", "2", "", "e.gsrca.de"],
    ["267125engine/gs.analytics.storedSessionCount", "e.gsrca.de", "Pending", "Persistent", "HTML", "2", "", "e.gsrca.de"],
    ["cs_siftsession", "email.tutsplus.com", "Pending", "Session", "HTTP", "1", "", "email.tutsplus.com"],
    ["plunker.preferences", "embed.plnkr.co", "Pending", "Persistent", "HTML", "2", "", "embed.plnkr.co"],
    ["_aCMR_1", "gammaplatform.com", "Pending", "399 days", "HTTP", "1", "", "gammaplatform.com"],
    ["_aGeoIp", "gammaplatform.com", "Pending", "1 day", "HTTP", "1", "", "gammaplatform.com"],
    ["_aUID", "gammaplatform.com", "Pending", "399 days", "HTTP", "1", "", "gammaplatform.com"],
    ["nscQ485", "o2online.de", "Pending", "7 days", "HTTP", "1", "", "partner.o2online.de"],
    ["nscT485", "o2online.de", "Pending", "7 days", "HTTP", "1", "", "partner.o2online.de"],
    ["a", "partner.blau.de<br/>partner.o2online.de", "Pending", "Session", "Pixel", "5", "", "partner.blau.de<br/>partner.o2online.de"],
    ["nws/img/postview.gif", "portal.blau.de<br/>portal.o2online.de", "Pending", "Session", "Pixel", "5", "", "portal.blau.de<br/>portal.o2online.de"],
    ["paccept", "run.plnkr.co", "Pending", "Session", "HTTP", "1", "", "run.plnkr.co"],
    ["ntm_tps__4011", "simptrack.com", "Pending", "3 months", "HTTP", "1", "", "tm.simptrack.com"],
    ["v0rur7gqspb3_uid", "simptrack.com", "Pending", "3 months", "HTTP", "1", "", "tm.simptrack.com"]
];
CookieConsentDialog.cookieTableNecessaryCount = 93;
CookieConsentDialog.cookieTablePreferenceCount = 50;
CookieConsentDialog.cookieTableStatisticsCount = 100;
CookieConsentDialog.cookieTableAdvertisingCount = 234;
CookieConsentDialog.cookieTableUnclassifiedCount = 52;
CookieConsent.whitelist = ["c", "dt", "pr", "checkForPermission", "CookieConsent", "__cfruid", "lessonWatchTracking", "__cf_bm", "algoliasearch-client-js", "INGRESSCOOKIE", "cid", "AWSALBCORS", "_ce.cch", "ajs_user_id", "ce_successful_csp_check", "cybermonday2019_cart", "envato_c_cart", "envato_c_cart_items", "is_eu", "AWSALB", "PHPSESSID", "CONSENT", "rc::a", "rc::c", "rc::e", "_help_center_session", "cf_use_ob", "cu", "JSESSIONID", "li_gc", "ASP.NET_SessionId", "SERVERID#", "audit", "_abck", "bm_sz", "_tuts_session", "cookies.js_dtest", "redirect_after_sign_in_url"];
CookieConsentDialog.privacyPolicies = [
    ["360yield.com", "Improve Digital", "https://improvedigital.com/privacy-policy/"],
    ["a.tribalfusion.com", "Exponential", "http://exponential.com/privacy/"],
    ["aax-eu.amazon-adsystem.com", "Amazon", "https://www.amazon.com/gp/help/customer/display.html/ref=footer_privacy?ie=UTF8&nodeId=468496"],
    ["acuityplatform.com", "Acuity", "https://www.acuityads.com/privacy-policy/"],
    ["ad.turn.com", "Amobee", "https://www.amobee.com/trust/privacy-guidelines/"],
    ["adform.net", "Adform", "https://site.adform.com/privacy-center/platform-privacy/opt-out/"],
    ["adrta.com", "Pixalate", "http://www.pixalate.com/privacypolicy/"],
    ["ads.linkedin.com", "LinkedIn", "https://www.linkedin.com/legal/privacy-policy"],
    ["ads.pubmatic.com", "Pubmatic", "https://pubmatic.com/legal/privacy-policy/"],
    ["ads.stickyadstv.com", "Freewheel", "https://www.freewheel.com/privacy-policy"],
    ["ads.travelaudience.com", "Travel Audience", "https://travelaudience.com/website-privacy-policy/"],
    ["adservice.google.com", "Google", "https://policies.google.com/privacy"],
    ["adsrvr.org", "The Trade Desk", "https://www.thetradedesk.com/general/website-privacy-policy"],
    ["agkn.com", "Neustar", "https://www.home.neustar/privacy"],
    ["ap.lijit.com", "Sovrn", "https://www.sovrn.com/legal/privacy-policy/"],
    ["auth.wistia.com", "Wistia", "https://wistia.com/privacy"],
    ["awin1.com", "Awin", "https://www.awin.com/gb/legal"],
    ["bam.nr-data.net", "New Relic", "https://newrelic.com/termsandconditions/services-notices"],
    ["beacon.krxd.net", "Salesforce", "https://www.salesforce.com/eu/company/privacy/"],
    ["bh.contextweb.com", "Pulsepoint", "https://pulsepoint.com/legal/platform-privacy-policy"],
    ["bidr.io", "Beeswax", "https://www.beeswax.com/cookies/"],
    ["bing.com", "Microsoft", "https://privacy.microsoft.com/en-US/privacystatement"],
    ["blismedia.com", "Blismedia.com", "http://www.blis.com/privacy/"],
    ["bluekai.com", "Bluekai.com", "http://www.oracle.com/us/legal/privacy/"],
    ["brand-display.com", "Brand-display.com", "http://brand-display.com/"],
    ["bs.serving-sys.com", "Sizmek", "https://www.sizmek.com/privacy-policy/optedout/"],
    ["build.envato.com", "Envato", "https://envato.com/privacy/"],
    ["business.tutsplus.com", "Envato", "https://envato.com/privacy/"],
    ["c.appier.net", "Appier", "https://www.appier.com/privacy-policy/"],
    ["c1.adform.net", "Adform", "https://site.adform.com/privacy-center/platform-privacy/opt-out/"],
    ["cat.fr.eu.criteo.com", "Criteo", "https://www.criteo.com/privacy/corporate-privacy-policy/"],
    ["cbsi.demdex.net", "Adobe Inc.", "https://www.adobe.com/privacy.html"],
    ["cdn.segment.com", "Segment", "https://segment.com/docs/legal/privacy/"],
    ["cdpn.io", "Codepen", "https://codepen.io/pro/privacy"],
    ["cgi.tutsplus.com", "Envato", "https://envato.com/privacy/"],
    ["change.org", "Change.org", "https://www.change.org/policies/privacy"],
    ["choices.trustarc.com", "TrustArc", "https://www.trustarc.com/privacy-policy/"],
    ["cms.quantserve.com", "Quantcast", "https://www.quantcast.com/privacy/"],
    ["codepen.io", "Codepen", "https://codepen.io/pro/privacy"],
    ["codesandbox.io", "CodeSandbox", "https://codesandbox.io/legal/privacy"],
    ["company-target.com", "DemandBase", "https://www.demandbase.com/privacy-policy/"],
    ["congstar.de", "Congstar", "https://www.congstar.de/datenschutz/"],
    ["connextra.com", "Genius Sports", "https://www.geniussports.com/privacy-policy/"],
    ["consentcdn.cookiebot.com", "Cookiebot", "https://www.cookiebot.com/goto/privacy-policy/"],
    ["contextweb.com", "Pulsepoint", "https://pulsepoint.com/legal/platform-privacy-policy"],
    ["cookiebot.com", "Cookiebot", "https://www.cookiebot.com/goto/privacy-policy/"],
    ["creative-serving.com", "KPN", "https://www.internedservices.nl/disclaimer-privacy-policy/"],
    ["criteo.com", "Criteo", "https://www.criteo.com/privacy/corporate-privacy-policy/"],
    ["ct.pinterest.com", "Pinterest", "https://policy.pinterest.com/en/privacy-policy-2016"],
    ["ctnsnet.com", "Crimtan", "https://crimtan.com/privacy/"],
    ["d37vlkgj6jn9t1.cloudfront.net", "Amazon", "https://www.amazon.com/gp/help/customer/display.html/ref=footer_privacy?ie=UTF8&nodeId=468496"],
    ["d5p.de17a.com", "Delta Projects", "https://www.deltaprojects.com/privacy-policy/"],
    ["demdex.net", "Adobe Inc.", "https://www.adobe.com/privacy.html"],
    ["docs.google.com", "Google", "https://policies.google.com/privacy"],
    ["dotomi.com", "Conversant", "https://www.conversantmedia.com/legal/privacy"],
    ["doubleclick.net", "Google", "https://policies.google.com/privacy"],
    ["dpm.demdex.net", "Adobe", "https://www.adobe.com/uk/privacy.html"],
    ["dsp.adfarm1.adition.com", "Adition Technologies", "https://www.adition.com/en/privacy/"],
    ["dsum-sec.casalemedia.com", "Casale Media", "http://www.casalemedia.com/"],
    ["dt.adsafeprotected.com", "Mas Capital", "https://integralads.com/privacy-policy/"],
    ["eb2.3lift.com", "Triplelift", "https://triplelift.com/privacy/"],
    ["email.tutsplus.com", "Envato", "https://envato.com/privacy/"],
    ["embed.plnkr.co", "Plunker", "http://plnkr.co/"],
    ["endpoint1.collection.us2.sumologic.com", "Sumo Logic", "https://www.sumologic.com/privacy-statement/"],
    ["envato.com", "Envato", "https://envato.com/privacy/"],
    ["envatomarketplaces.zendesk.com", "Zendesk", "https://www.zendesk.com/company/customers-partners/privacy-policy/"],
    ["eus.rubiconproject.com", "Rubicon Project", "https://rubiconproject.com/privacy-policy/"],
    ["exelator.com", "The Nielsen Company", "https://www.nielsen.com/us/en/legal/privacy-statement/"],
    ["fast.appcues.com", "Appcues", "https://www.appcues.com/privacy"],
    ["fast.wistia.net", "Wistia", "https://wistia.com/privacy"],
    ["formstack.com", "Formstack", "https://www.formstack.com/privacy"],
    ["gcm.ctnsnet.com", "Crimtan", "https://crimtan.com/privacy/"],
    ["google.com", "Google", "https://policies.google.com/privacy"],
    ["googleads.g.doubleclick.net", "Google", "https://policies.google.com/privacy"],
    ["help.author.envato.com", "Envato", "https://envato.com/privacy/"],
    ["help.elements.envato.com", "Envato", "https://envato.com/privacy/"],
    ["help.market.envato.com", "Envato", "https://envato.com/privacy/"],
    ["ib.adnxs.com", "Appnexus", "https://www.appnexus.com/corporate-privacy-policy"],
    ["ipredictive.com", "Adelphic", "https://www.adelphic.com/privacy-policy/"],
    ["linkedin.com", "LinkedIn", "https://www.linkedin.com/legal/privacy-policy"],
    ["match.adsrvr.org", "The Trade Desk", "https://www.thetradedesk.com/general/website-privacy-policy"],
    ["mathtag.com", "MediMath", "https://www.mediamath.com/privacy-policy/"],
    ["mookie1.com", "Xaxis", "https://www.xaxis.com/privacy-notice/"],
    ["mplxtms.com", "Conversant", "https://www.conversantmedia.com/legal/privacy"],
    ["nr-data.net", "New Relic", "https://newrelic.com/termsandconditions/privacy"],
    ["odr.mookie1.com", "Xaxis", "https://www.xaxis.com/privacy-notice/"],
    ["openx.net", "Openx", "https://www.openx.com/legal/privacy-policy/"],
    ["pagead2.googlesyndication.com", "Google", "https://policies.google.com/privacy"],
    ["partner.blau.de", "Blau.de", "https://www.blau.de/recht/datenschutz/"],
    ["partner.o2online.de", "O2", "https://www.o2.co.uk/termsandconditions/privacy-policy"],
    ["pb.media01.eu", "Microsoft", "https://privacy.microsoft.com/en-US/privacystatement"],
    ["pexels.com", "Pexels", "https://www.pexels.com/privacy-policy/"],
    ["photography.tutsplus.com", "Envato", "https://envato.com/privacy/"],
    ["pixel.rubiconproject.com", "Rubicon Project", "https://rubiconproject.com/privacy-policy/"],
    ["pixel-sync.sitescout.com", "Sitescout.com", "http://www.sitescout.com/privacy"],
    ["platform.twitter.com", "Twitter Inc.", "https://twitter.com/en/privacy"],
    ["play.google.com", "Google", "https://policies.google.com/privacy"],
    ["pm.w55c.net", "Dataxu", "https://www.dataxu.com/about-us/privacy/"],
    ["pool.admedo.com", "Admedo", "https://www.admedo.com/privacy-policy"],
    ["portal.blau.de", "Blau.de", "https://www.blau.de/recht/datenschutz/"],
    ["portal.o2online.de", "O2", "https://www.o2.co.uk/termsandconditions/privacy-policy"],
    ["pr-bh.ybp.yahoo.com", "Yahoo", "https://policies.yahoo.com/us/en/yahoo/privacy/index.htm"],
    ["presentation-ams1.turn.com", "Amobee", "https://www.amobee.com/trust/privacy-guidelines/"],
    ["pubmatic.com", "PubMatic", "https://pubmatic.com/legal/privacy/"],
    ["pv.medialead.de", "Medialead", "https://www.medialead.de/de/datenschutz.html"],
    ["r.turn.com", "Amobee", "https://www.amobee.com/trust/privacy-guidelines/"],
    ["radar.cloudflare.com", "Cloudflare", "https://www.cloudflare.com/privacypolicy/"],
    ["rfihub.com", "Zeta Global", "https://zetaglobal.com/privacy-policy/"],
    ["rlcdn.com", "LiveRamp", "https://liveramp.com/privacy/"],
    ["rtb.openx.net", "Openx", "https://www.openx.com/legal/privacy-policy/"],
    ["rtb-csync.smartadserver.com", "Smart", "https://smartadserver.com/corporate-privacy-policy/"],
    ["rubiconproject.com", "Rubicon Project", "https://rubiconproject.com/privacy-policy/"],
    ["run.plnkr.co", "Plunker", "http://plnkr.co/"],
    ["s.amazon-adsystem.com", "Amazon", "https://www.amazon.com/gp/help/customer/display.html/ref=footer_privacy?ie=UTF8&nodeId=468496"],
    ["s.tribalfusion.com", "Exponential", "http://exponential.com/privacy/"],
    ["script.hotjar.com", "Hotjar", "https://www.hotjar.com/legal/policies/privacy/"],
    ["securepubads.g.doubleclick.net", "Google", "https://policies.google.com/privacy"],
    ["simpli.fi", "Simpli.fi", "https://simpli.fi/site-privacy-policy/"],
    ["smartadserver.com", "Smart", "https://smartadserver.com/corporate-privacy-policy/"],
    ["sportradarserving.com", "Sportradar", "https://www.sportradar.com/about-us/privacy/"],
    ["spotxchange.com", "SpotX", "https://www.spotx.tv/privacy-policy/"],
    ["srv.stackadapt.com", "StackAdapt", "https://www.stackadapt.com/privacy"],
    ["ssbsync.smartadserver.com", "Smart", "https://smartadserver.com/corporate-privacy-policy/"],
    ["static.formstack.com", "Formstack", "https://www.formstack.com/privacy"],
    ["static.tutsplus.com", "Envato", "https://envato.com/privacy/"],
    ["static.zdassets.com", "Zendesk", "https://www.zendesk.com/company/customers-partners/privacy-policy/"],
    ["studiosupport.envato.com", "Envato", "https://envato.com/privacy/"],
    ["sync.1rx.io", "RhythmOne", "https://www.rhythmone.com/privacy-policy"],
    ["sync.mathtag.com", "MediMath", "https://www.mediamath.com/privacy-policy/"],
    ["sync.search.spotxchange.com", "SpotX", "https://www.spotx.tv/privacy-policy/"],
    ["sync.srv.stackadapt.com", "StackAdapt", "https://www.stackadapt.com/privacy"],
    ["sync.targeting.unrulymedia.com", "Unruly", "https://unruly.co/privacy/"],
    ["sync-tm.everesttech.net", "Adobe Inc.", "https://www.adobe.com/privacy.html"],
    ["t.co", "Twitter Inc.", "https://twitter.com/en/privacy"],
    ["tapad.com", "Tapad", "https://www.tapad.com/privacy"],
    ["tidaltv.com", "Tidal", "http://tidaltv.com/"],
    ["turn.com", "Amobee", "https://www.amobee.com/trust/privacy-guidelines/"],
    ["tuts.wistia.com", "Wistia", "https://wistia.com/privacy"],
    ["tutsplus.com", "Envato", "https://envato.com/privacy/"],
    ["twitter.com", "Twitter Inc.", "https://twitter.com/en/privacy"],
    ["um.simpli.fi", "Simpli.fi", "https://www.simpli.fi/site-privacy-policy2/"],
    ["unsplash.com", "Unsplash", "https://unsplash.com/privacy"],
    ["ups.analytics.yahoo.com", "Oath", "https://policies.oath.com/us/en/oath/privacy/index.html"],
    ["us-u.openx.net", "Openx", "https://www.openx.com/legal/privacy-policy/"],
    ["vimeo.com", "Vimeo", "https://vimeo.com/privacy"],
    ["w.soundcloud.com", "Soundcloud", "https://soundcloud.com/pages/privacy"],
    ["w55c.net", "Dataxu", "https://www.dataxu.com/about-us/privacy/"],
    ["webdesign.tutsplus.com", "Envato", "https://envato.com/privacy/"],
    ["www.awin1.com", "Awin", "https://www.awin.com/gb/legal"],
    ["www.conrad.de", "Conrad", "https://www.conrad.at/de/service/agb/datenschutz.html"],
    ["www.envato.com", "Envato", "https://envato.com/privacy/"],
    ["www.google.com", "Google", "https://policies.google.com/privacy"],
    ["www.google.ie", "Google", "https://policies.google.com/privacy"],
    ["www.google-analytics.com", "Google", "https://policies.google.com/privacy"],
    ["www.instagram.com", "Instagram", "https://help.instagram.com/519522125107875"],
    ["www.tiktok.com", "Tiktok", "https://www.tiktok.com/legal/privacy-policy?lang=en"],
    ["www.youtube.com", "YouTube", "https://policies.google.com/privacy"],
    ["www.zenaps.com", "Awin", "https://www.awin.com/gb/legal/privacy-policy-gb"],
    ["x.bidswitch.net", "Bidswitch", "https://www.bidswitch.com/privacy-policy/"],
    ["yandex.ru", "Yandex", "https://yandex.com/legal/privacy/"],
    ["youtube.com", "YouTube", "https://policies.google.com/privacy"],
    ["youtube-nocookie.com", "YouTube", "https://policies.google.com/privacy"],
    ["zenaps.com", "Awin", "https://www.awin.com/gb/legal/privacy-policy-gb"]
];
CookieConsentDialog.privacyPolicyText = '{0}\'s privacy policy';
CookieConsentDialog.userCountry = 'PL';
CookieConsent.userCountry = 'PL';
CookieConsent.updateRegulations();
CookieConsentDialog.userCulture = 'en-US';