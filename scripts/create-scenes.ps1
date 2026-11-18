Add-Type -AssemblyName System.Drawing

$W = 1920
$H = 1080

function Create-Scene($idx, $title, $sub, $screenPath, $badge, $actionTag) {
    $bmp = New-Object System.Drawing.Bitmap $W, $H
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit

    # 1. Dark Navy Background Gradient
    $bgBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
        (New-Object System.Drawing.Point 0, 0),
        (New-Object System.Drawing.Point 0, $H),
        [System.Drawing.Color]::FromArgb(7, 14, 30),
        [System.Drawing.Color]::FromArgb(4, 8, 18)
    )
    $g.FillRectangle($bgBrush, 0, 0, $W, $H)
    $bgBrush.Dispose()

    # 2. Cyan & Purple Radial Ambient Glows
    $glowBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(25, 56, 189, 248))
    $g.FillEllipse($glowBrush, 400, 200, 1120, 680)
    $glowBrush.Dispose()

    # 3. Pedestal Ring on Floor
    $pedestalPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(120, 56, 189, 248), 3)
    $g.DrawEllipse($pedestalPen, 320, 820, 1280, 180)
    $pedestalPen.Dispose()

    # 4. Top Branding Header
    $fontHeader = New-Object System.Drawing.Font("Segoe UI", 20, [System.Drawing.FontStyle]::Bold)
    $brushWhite = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::White)
    $brushCyan = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(56, 189, 248))
    $brushMuted = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(203, 213, 225))

    $g.DrawString("1 CLICK SOLUTION", $fontHeader, $brushWhite, 80, 60)
    $fontTag = New-Object System.Drawing.Font("Segoe UI", 13, [System.Drawing.FontStyle]::Bold)
    $g.DrawString("ROAD TO TECHNOLOGY • 3D PRODUCT DEMO", $fontTag, $brushCyan, 80, 95)

    # 5. Scene Badge Pill
    $badgeRect = New-Object System.Drawing.Rectangle 80, 140, 360, 36
    $badgeBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(40, 56, 189, 248))
    $badgePen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(140, 56, 189, 248), 1)
    $g.FillRectangle($badgeBrush, $badgeRect)
    $g.DrawRectangle($badgePen, $badgeRect)
    $badgeBrush.Dispose()
    $badgePen.Dispose()

    $fontBadge = New-Object System.Drawing.Font("Segoe UI", 12, [System.Drawing.FontStyle]::Bold)
    $g.DrawString("SCENE $idx OF 7 • $badge", $fontBadge, $brushCyan, 95, 148)

    # 6. Title and Subtitle Text Overlay
    $fontTitle = New-Object System.Drawing.Font("Segoe UI", 36, [System.Drawing.FontStyle]::Bold)
    $g.DrawString($title, $fontTitle, $brushWhite, 80, 190)

    $fontSub = New-Object System.Drawing.Font("Segoe UI", 18, [System.Drawing.FontStyle]::Regular)
    $g.DrawString($sub, $fontSub, $brushMuted, 80, 255)

    # 7. Device Laptop Frame with Real Screen
    $laptopX = 260
    $laptopY = 320
    $laptopW = 1400
    $laptopH = 680

    # Laptop Frame Chassis
    $frameBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(20, 28, 44))
    $framePen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(60, 255, 255, 255), 2)
    $g.FillRectangle($frameBrush, $laptopX, $laptopY, $laptopW, $laptopH)
    $g.DrawRectangle($framePen, $laptopX, $laptopY, $laptopW, $laptopH)

    # Screen inside bezel
    $screenX = $laptopX + 16
    $screenY = $laptopY + 24
    $screenW = $laptopW - 32
    $screenH = $laptopH - 40

    if (Test-Path $screenPath) {
        $screenBmp = [System.Drawing.Bitmap]::FromFile($screenPath)
        $g.DrawImage($screenBmp, $screenX, $screenY, $screenW, $screenH)
        $screenBmp.Dispose()
    } else {
        $placeholderBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(11, 23, 48))
        $g.FillRectangle($placeholderBrush, $screenX, $screenY, $screenW, $screenH)
        $placeholderBrush.Dispose()
    }

    # Laptop Base deck
    $baseBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
        (New-Object System.Drawing.Point $laptopX, ($laptopY + $laptopH)),
        (New-Object System.Drawing.Point $laptopX, ($laptopY + $laptopH + 20)),
        [System.Drawing.Color]::FromArgb(196, 203, 214),
        [System.Drawing.Color]::FromArgb(126, 139, 158)
    )
    $g.FillRectangle($baseBrush, ($laptopX - 30), ($laptopY + $laptopH), ($laptopW + 60), 20)
    $baseBrush.Dispose()

    # 8. Interactive Action Callout Tag
    if ($actionTag -ne "") {
        $tagX = 1400
        $tagY = 160
        $tagRect = New-Object System.Drawing.Rectangle $tagX, $tagY, 440, 50
        $tagBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(2, 132, 199))
        $g.FillRectangle($tagBrush, $tagRect)
        $tagBrush.Dispose()

        $fontAction = New-Object System.Drawing.Font("Segoe UI", 14, [System.Drawing.FontStyle]::Bold)
        $g.DrawString($actionTag, $fontAction, $brushWhite, ($tagX + 16), ($tagY + 12))
        $fontAction.Dispose()
    }

    # Cleanup fonts & brushes
    $fontHeader.Dispose()
    $fontTag.Dispose()
    $fontBadge.Dispose()
    $fontTitle.Dispose()
    $fontSub.Dispose()
    $brushWhite.Dispose()
    $brushCyan.Dispose()
    $brushMuted.Dispose()

    # Save Bitmap
    $outPath = "scripts/scene_$idx.png"
    $bmp.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $g.Dispose()
    $bmp.Dispose()
    Write-Host "Created $outPath"
}

# Generate 7 Scenes with verified JPG screen assets
Create-Scene 1 "Your Entire School. One Smart Platform." "Welcome to 1 Click Solution — Complete Educational Management System" "src/assets/screens/real-cms-full.jpg" "DASHBOARD INTRODUCTION" "Live Administrative Cloud ERP"
Create-Scene 2 "Intuitive Navigation & Instant Access." "Sidebar connecting Admissions, Staff, Attendance, Academics and Accounts" "src/assets/screens/real-cms-full.jpg" "SIDEBAR NAVIGATION" "One-Click Module Switcher"
Create-Scene 3 "Manage Attendance with Ease." "Daily student and staff attendance with automatic SMS alerts to parents" "src/assets/screens/g-attendance.jpg" "ATTENDANCE WORKFLOW" "Instant Absentee SMS Alerts"
Create-Scene 4 "Simplify Fee Collection & Records." "Dynamic Fee Revise module at http://127.0.0.1:8001/admin/account/studentfee" "src/assets/screens/real-fee-revise.jpg" "FEE REVISE & VOUCHERS" "Main Campus Fee Records"
Create-Scene 5 "Turn School Data into Useful Insights." "Real-time fee collection trajectory, student records, and audited transcripts" "src/assets/screens/g-reports.jpg" "REPORTS & ANALYTICS" "Export to PDF & Excel"
Create-Scene 6 "One Connected Platform for Your Institution." "Centralized administration with 4 dedicated mobile apps for Parents, Teachers, Students & Chairmen" "src/assets/screens/g-dashboard.jpg" "MOBILE ECOSYSTEM" "4 Connected Mobile Apps"
Create-Scene 7 "1 Click Solution — Complete School Management." "Empower your institution with smart technology. Request your customized live demo today." "src/assets/screens/real-cms-full.jpg" "REQUEST A LIVE DEMO" "Start Your Free Onboarding"
